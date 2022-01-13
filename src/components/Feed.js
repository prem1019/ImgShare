import React, { Component } from 'react';
import Identicon from 'identicon.js';
import './App.css';
// import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render'
// import {Link} from 'react-router-dom'
class Feed extends Component {

render() {
    return (
      <div className="main container-fluid mt-5">
        <div className="row mt-5">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
          {/* <h1 className="text-center">Welcome</h1> */}
            <div className="content mr-auto ml-auto mt-5">
              {/* <h1 className="text-center">Feed</h1> */}
              {/* <h1 id="account">{this.props.account}</h1> */}
              { this.props.images.map((image, key) => {
                return(
                  <div className="card mb-4" style={{background:"lightyellow"}} key={key} >
                    <div className="card-header" >
                      <img
                        className='mr-2'
                        alt="__"
                        width='30'
                        height='30'
                        src={`data:image/png;base64,${new Identicon(image.author, 30).toString()}`}
                      />
                      {/* <Link to="/profile"><small className="text-muted">{image.author}</small></Link> */}
                      <small className="text-muted">{image.author}</small>
                      <button className="float-right bg-dark" style={{borderRadius:'5px'}}><a style={{textDecoration:"none", color:"lightyellow"}} href={`https://ipfs.infura.io/ipfs/${image._hash}`}>View <img src="https://img.icons8.com/cute-clipart/24/000000/zoom-in.png"/></a></button>
                    </div>
                    <ul id="imageList" className="list-group list-group-flush" >

                      {/* <If> */}

                      <li className="list-group-item bg-dark">
                        <p className="text-center"><img src={`https://ipfs.infura.io/ipfs/${image._hash}`} alt="__" style={{ maxWidth: '420px'}}/></p>
                        <p style={{color:"lightyellow"}}>{image.description}</p>
                      </li>
                      <li key={key} className="list-group-item py-2" style={{background:"lightyellow"}}>
                        <small className="float-left mt-1 text-muted">
                        <img style={{padding:"2px"}} src="https://img.icons8.com/ios-filled/24/000000/tip.png" alt=""/>TIPS: {window.web3.utils.fromWei(image.tipAmount.toString(), 'Ether')*10}
                        </small>
                        <button
                          className="btn btn-link btn-sm float-right bg-dark"
                          style={{textDecoration:"none", color:"lightyellow"}}
                          name={image.id}
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
                            console.log(event.target.name, tipAmount)
                            this.props.tipImageOwner(event.target.name, tipAmount)
                          }}
                        >
                          TIP <img style={{paddingLeft:"5px", paddingBottom:"2px"}} src="https://img.icons8.com/material-rounded/24/ffffff/facebook-like.png" alt="" />
                        </button>
                        {/* <form onSubmit={(event) => {
                          event.preventDefault()
                          const tipAmount = this.amount.value * 10 ** 18
                          console.log(event.target.name, tipAmount)
                          this.props.tipImageOwner(event.target.name, tipAmount)
                        }}>
                        <input
                          type="number"
                          name={image.id}
                          step="0.01"
                          className="btn btn-link btn-sm float-right pt-0"
                          id="amount"
                          ref={(input) => { this.amount = input }}
                          placeholder="Enter Tip Amount..."
                        />
                        <button type="submit" name={image.id} className="btn btn-link btn-sm float-right pt-0">Tip </button>
                        </form> */}
                      </li>
                      {/* </If> */}
                    </ul>
                  </div>
                )
              })} 
            </div>
              <h1 className="p-1 pb-2" style={{borderRadius:'5px',background:"lightyellow"}}><span role='img' aria-label='tick'> ☑️ </span>You are all Caught Up</h1>
          </main>
        </div>
      </div>
    );
  }
}

export default Feed;