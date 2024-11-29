// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract BuyMeCoffee {
    struct Coffeee {
        address sender;
        string message;
        uint256 timestamp;
    }

    uint256 totalCoffee;
    address payable owner;

    event NewCoffee(address indexed sender,string message, uint256 timestamp); 
    
    constructor(){
        owner = payable(msg.sender);
    }

    function buymecoffee(
        string memory _message
    ) public payable {
        require(msg.value > 0,"Value Must be greater than 0");
        totalCoffee +=1;
        payable(owner).transfer(msg.value);
        emit NewCoffee(msg.sender, _message, block.timestamp);
    }

    function getTotalCoffee() public view returns (uint256){
        return totalCoffee;
    }
}