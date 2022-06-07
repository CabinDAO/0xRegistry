// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {              

    // constructor function
    constructor(string memory _name, string memory _symbol, uint256 _initialSupply) ERC20(_name, _symbol) {
        // initial supply is sent to contract owner
        _mint(msg.sender, _initialSupply);
    }
}