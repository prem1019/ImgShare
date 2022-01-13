import React, { Component } from 'react';
import { If, Then,/* ElseIf, Else */} from 'react-if-elseif-else-render'
import Identicon from 'identicon.js';
import './App.css';

class Profile extends Component{
  
    render(){
        return(
            <div className="main">
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            {console.log(this.props)}
            <h2 id="account" style={{textAlign:'center', color:'lightyellow'}}>Account ID : {this.props.account} </h2>
            <div className=" container-fluid mt-5">
        <div className="row mt-5">
          <main role="main" className="col-lg-12 ml-auto mr-auto mt-5" style={{ maxWidth: '500px' }}>
            <div className="content mr-auto ml-auto">
              {/* <h1 id="account">{this.props.account}</h1> */}
              { this.props.images.map((image, key) => {
                return(
                  <>
                  <If condition={image.author===this.props.account}>
                      <Then>
                  <div className="card mb-4" key={key} >
                    <div className="card-header" style={{background:"lightyellow"}}>
                      <img
                        className='mr-2'
                        alt="__"
                        width='30'
                        height='30'
                        src={`data:image/png;base64,${new Identicon(image.author, 30).toString()}`}
                      />
                      <small className="text-muted">{image.author}</small>
                      
                      <button className="float-right bg-dark" style={{borderRadius:'5px'}}><a style={{textDecoration:"none", color:"lightyellow"}} href={`https://ipfs.infura.io/ipfs/${image._hash}`}>View <img src="https://img.icons8.com/cute-clipart/24/000000/zoom-in.png"/></a></button>
                    </div>
                    <ul id="imageList" className="list-group list-group-flush">
                      <li className="list-group-item bg-dark">
                        <p className="text-center"><img src={`https://ipfs.infura.io/ipfs/${image._hash}`} alt="__" style={{ maxWidth: '420px'}}/></p>
                        <p style={{color:"lightyellow"}}>{image.description}</p>
                      </li>
                      <li key={key} className="list-group-item py-2" style={{background:"lightyellow"}}>
                        <small className="float-left tc mt-1 text-muted">
                        <img style={{padding:"2px"}} src="https://img.icons8.com/ios-filled/24/000000/tip.png" alt=""/>TOTAL TIP AMOUNT RECIEVED: {window.web3.utils.fromWei(image.tipAmount.toString(), 'Ether')} Ether
                        </small>
                        {/* <button
                          className="btn btn-link btn-sm float-right pt-0"
                          name={image.id}
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
                            console.log(event.target.name, tipAmount)
                            this.props.tipImageOwner(event.target.name, tipAmount)
                          }}
                        >
                          TIP <span role="img" aria-label="">❤️</span> 1 tip = 0.1 ether
                        </button> */}
                        {/* <form onSubmit={(event) => {
                          event.preventDefault()
                          const tipAmount = this.amount.value * 10 ** 18
                          console.log(event.target.name, tipAmount)
                          this.props.tipImageOwner(event.target.name, tipAmount)
                        }}>
                        <input
                          type="number"
                          step="0.01"
                          className="btn btn-link btn-sm float-right pt-0"
                          id="amount"
                          ref={(input) => { this.amount = input }}
                          placeholder="Enter Tip Amount..."
                        />
                        <button type="submit" className="btn btn-link btn-sm float-right pt-0">Tip </button>
                        </form> */}
                        
                      </li>
                    </ul>
                  </div>
                  </Then>
                  </If>
                  </>
                )
              })} 
            </div>
          </main>
        </div>
      </div>
            </div>
        );
    }
}

export default Profile;