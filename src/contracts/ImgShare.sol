pragma solidity ^0.5.0;

contract ImgShare {
  string public name = "ImgShare";

  //store images
  uint public imageCount = 0;
  mapping(uint => Image) public images;

  struct Image{
    uint id;
    string _hash;
    string description;
    uint tipAmount;
    address payable author;
  }

  event ImageCreated(
    uint id,
    string _hash,
    string description,
    uint tipAmount,
    address payable author
  );

  event ImageTipped(
    uint id,
    string _hash,
    string description,
    uint tipAmount,
    address payable author
  );

  //create images
  function uploadImage(string memory _imgHash, string memory _description) public{

    //making sure image hash, image description, uploader address exists
    require(bytes(_imgHash).length > 0);
    require(bytes(_description).length > 0);
    require(msg.sender != address(0x0));

    //increement img id
    imageCount++;

    //add image to contract 
    images[imageCount] = Image(imageCount,_imgHash,_description, 0, msg.sender);

    //trigger event
    emit ImageCreated(imageCount, _imgHash, _description, 0, msg.sender);
  }

  //tip images
  function tipImageOwner(uint _id) public payable {
    //making sure id is valid
    require(_id > 0 && _id <= imageCount);
    //Fetch image
    Image memory _image = images[_id];
    //fetch author
    address payable _author = _image.author;
    //tip the author by sending ether
    address(_author).transfer(msg.value);
    //Increement the total tip
    _image.tipAmount = _image.tipAmount + msg.value;
    //Update the image
    images[_id] = _image;
    //trigger event
    emit ImageTipped(_id, _image._hash, _image.description, _image.tipAmount, _author);
  }
}