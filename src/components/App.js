import React, { Component } from 'react';
import Web3 from 'web3';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import photo1 from '../YCZH.gif'
import ImgShare from '../abis/ImgShare.json'
import Navbar from './Navbar'
import AddImage from './AddImage'
import Feed from './Feed'
import Profile from './Profile';
import Footer from './Footer';

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https'})

class App extends Component {

  async componentWillMount(){
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3(){
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else{
      window.alert('Non-Ethereum browser detected. try Metamask')
    }
  }

  async loadBlockchainData(){
    const web3 = window.web3
    //load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0]})
    //network ID
    const networkId = await web3.eth.net.getId()
    const networkData = ImgShare.networks[networkId]
    if(networkData){
      const imgshare = web3.eth.Contract(ImgShare.abi, networkData.address)
      this.setState({ imgshare })
      const imagesCount = await imgshare.methods.imageCount().call()
      this.setState({ imagesCount })

      //load images
      for(var i=1;i<=imagesCount;i++){
        const image = await imgshare.methods.images(i).call()
        this.setState({
          images: [...this.state.images, image]
        })
      }

      //sort images according to tips
      this.setState({
        images: this.state.images.sort((a,b) => b.tipAmount - a.tipAmount)
      })

      this.setState({ loading: false })
    }else{
      window.alert('ImgShare contract not deployed to detected network')
    }
  }

  captureFile = event =>{
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)

    reader.onloadend = () =>{
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }

  uploadImage = description =>{
    console.log("Submitting file to IPFS..")

    //adding file to ipfs
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('IPFS result', result)
      if(error){
        console.log(error)
        return
      }

      this.setState({ loading: true })
      this.state.imgshare.methods.uploadImage(result[0].hash, description).send({ from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      alert("Image Uploaded Successfully");
      })
    })
  }

  tipImageOwner = (id, tipAmount) => {
    this.setState({ loading: true })
    this.state.imgshare.methods.tipImageOwner(id).send({ from: this.state.account, value: tipAmount }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }

  

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      imgshare: null,
      images: [],
      loading: true
    }
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        <Switch>
        { this.state.loading
          ? <div id="loader" className="text-center mt-5"><p>&nbsp;</p><img src={photo1} alt="__"/></div>
          : <Route path='/new' component={()=><AddImage
            images={this.state.images}
            captureFile={this.captureFile}
            uploadImage={this.uploadImage}
            tipImageOwner={this.tipImageOwner}
            />
          }
            />
        }
        { this.state.loading
          ? <div id="loader" className="text-center mt-5"><p>&nbsp;</p><img src={photo1} alt="__"/></div>
          : <Route path='/feed' component={()=><Feed
            images={this.state.images}
            captureFile={this.captureFile}
            uploadImage={this.uploadImage}
            tipImageOwner={this.tipImageOwner}
            />
          }
            />
        }
        { this.state.loading
          ? <div id="loader" className="text-center mt-5"><p>&nbsp;</p><img src={photo1} alt="__"/></div>
          : <Route path='/profile' component={()=><Profile
            account={this.state.account}
            images={this.state.images}
            captureFile={this.captureFile}
            uploadImage={this.uploadImage}
            tipImageOwner={this.tipImageOwner}
            />
          }
            />
        }
        { this.state.loading
          ? <div id="loader" className="text-center mt-5"><p>&nbsp;</p><img src={photo1} alt="__"/></div>
          : <Route exact path='/' component={()=><Feed
            images={this.state.images}
            captureFile={this.captureFile}
            uploadImage={this.uploadImage}
            tipImageOwner={this.tipImageOwner}
            />
          }
            />
        }
          </Switch>
        { this.state.loading
          ? <div id="loader" className="text-center mt-5 "><p>&nbsp;</p></div>
          : <Footer/>
        }
      </div>
    );
  }
}

export default App;