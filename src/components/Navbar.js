import React, { Component } from 'react';
import Identicon from 'identicon.js';
// import photo from '../photo.png'
import {Link} from 'react-router-dom'
import './App.css'
class Navbar extends Component {
  render() {
    return (
      <nav className="Nav navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <div style={{color:"lightyellow"}}>
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="https://github.com/prem1019"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/color/48/000000/camera.png" width="30" height="30" className="d-inline-block align-top " alt="" />
           ImgShare
        </a>
        </div>
        <Link to="/new"
        className="new shadow"
        style={{background:'lightyellow',padding:'5px', borderRadius:'10px', color:"blue", textDecoration:"none"}}
        // href="/new"
        // target="_blank"
        // rel="noopener noreferrer"
        >
         Add Image
         <img style={{paddingLeft:"5px", paddingBottom:"2px"}} alt="" src="https://img.icons8.com/material-outlined/24/000000/add-image.png"/>
        </Link>
        <Link to="/feed"
        className="feed shadow"
        style={{background:'lightyellow',padding:'5px', borderRadius:'10px', color:"blue", textDecoration:"none"}}
        // href="/feed"
        // target="_blank"
        // rel="noopener noreferrer"
        >
         Feed
           <img style={{paddingLeft:"5px", paddingBottom:"2px"}} alt="" src="https://img.icons8.com/ios/25/000000/activity-feed-2.png"/>
        </Link>
        <Link to="/profile"
        className="profile shadow"
        style={{background:'lightyellow',padding:'5px', borderRadius:'10px', color:"blue", textDecoration:"none"}}
        // href="/profile"
        // target="_blank"
        // rel="noopener noreferrer"
        >
         Profile
         <img style={{paddingLeft:"5px", paddingBottom:"2px"}} alt="" src="https://img.icons8.com/material-outlined/24/000000/user--v1.png"/>
        </Link>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <Link to="/profile"><small id="account" style={{color:"lightyellow"}}>{this.props.account}</small></Link>
            </small>
            { this.props.account
              ? <img
                className='ml-2'
                alt="__"
                width='30'
                height='30'
                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
              />
              : <span></span>
            }
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;