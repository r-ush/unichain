pragma solidity ^0.8.2;
contract unichain {
string ipfsHash;
 
 function createHash(string memory inputdata) public {
   ipfsHash = inputdata;
 }

 function getHash() public view returns (string memory inputdata) {
   return ipfsHash;
 }
}