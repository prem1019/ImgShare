import React, { Component } from 'react';
// import photo from '../photo.png'

class Footer extends Component{
    render(){
        return(
            <>
            <div className="footer bottom mb-0 p-0">
                <h1 className="bg-dark" style={{color:'lightyellow',textAlign:'center'}}>
                {/* <h1><img src="https://img.icons8.com/color/60/000000/camera.png" className="p-2" alt="" /> */}
                    <h1> Contact Us: </h1>
                    {/* <br/> */}
                    {/* <p>&nbsp;</p> */}
                    {/* <small><small><small><small>+91 7385358051</small></small></small></small>
                    <br/>
                    <small><small><small><small>premshah1019@gmail.com</small></small></small></small>
                    <br/>
                    <small><small><small><small>github.com/prem1019</small></small></small></small>
                    <br/> */}
                    <a href="https://instagram.com"><img className="p-3" src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt=""/></a>
                    <a href="https://facebook.com"><img className="p-3" src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt=""/></a>
                    <a href="https://github.com/prem1019" ><img className="p-3" src="https://img.icons8.com/material-rounded/48/000000/github.png" alt=""/></a>

                </h1>
            </div>
            </>
        );
    }
}

export default Footer;