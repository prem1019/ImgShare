import React, { Component } from 'react';
import './App.css';
// import photo from '../icons8-plus.gif'
class AddImage extends Component {

render() {
    return (
      <div className="background">
      <div className="main container-fluid mt-5 ">
        <div className="row">
          <main role="main" className=" ml-auto mr-auto" style={{ maxWidth: '500px', }}>
            <div className="content ">
              <div  className="shadow" style={{marginTop:"50%", marginBottom:"50%", background:"lightyellow", padding:"25px", borderRadius:"10px"}}>
              {/* <p>&nbsp;</p> */}
              <h1 className="text-center">Upload Image <br/> <img src="https://img.icons8.com/clouds/100/000000/upload.png" alt=""/></h1>
              {/* <p>&nbsp;</p> */}
              <br></br>
              <form onSubmit={(event) => {
                event.preventDefault()
                const description = this.imageDescription.value
                this.props.uploadImage(description)
              }} >
                <input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif, .pdf, .docx, .mp4, .mkv" onChange={this.props.captureFile} />
                  <div className="form-group mr-sm-2">
                    <br></br>
                      <input
                        id="imageDescription"
                        type="text"
                        ref={(input) => { this.imageDescription = input }}
                        className="form-control"
                        placeholder="Image description..."
                        required />
                  </div>
                <button type="submit" className="btn btn-primary btn-block btn-lg" style={{background:"blueviolet"}}>Upload!</button>
              </form>
              </div>
              {/* { this.props.images.map((image, key) => {
                return(
                  <div className="card mb-4" key={key} >
                    <div className="card-header">
                      <img
                        className='mr-2'
                        width='30'
                        height='30'
                        src={`data:image/png;base64,${new Identicon(image.author, 30).toString()}`}
                      />
                      <small className="text-muted">{image.author}</small>
                    </div>
                    <ul id="imageList" className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p className="text-center"><img src={`https://ipfs.infura.io/ipfs/${image.hash}`} style={{ maxWidth: '420px'}}/></p>
                        <p>{image.description}</p>
                      </li>
                      <li key={key} className="list-group-item py-2">
                        <small className="float-left mt-1 text-muted">
                          TIPS: {window.web3.utils.fromWei(image.tipAmount.toString(), 'Ether')*10}
                        </small>
                        <button
                          className="btn btn-link btn-sm float-right pt-0"
                          name={image.id}
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
                            console.log(event.target.name, tipAmount)
                            this.props.tipImageOwner(event.target.name, tipAmount)
                          }}
                        >
                          TIP ❤️ 1 tip = 0.1 ether
                        </button>
                      </li>
                    </ul>
                  </div>
                )
              })} */}
            </div>
          </main>
        </div>
      </div>
      </div>
    );
  }
}

export default AddImage;