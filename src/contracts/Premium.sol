pragma solidity ^0.5.0;

contract Premium{
    string public name = "ImgShare";

  //store images
  uint public imageCount = 0;
  mapping(uint => Image) public images;

  struct Image{
    uint id;
    string hash;
    string description;
    uint cost;
    bool subscribed;
    uint tipAmount;
    address payable author;
  }

  function uploadImage(string memory _imgHash, string memory _description) public{

  }
}