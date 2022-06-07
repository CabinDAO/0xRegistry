// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import "@openzeppelin/contracts/access/Ownable.sol";

contract TcrRegistry is Ownable {

    mapping (string => address) public tcrs;
    event TcrRegistered(string indexed name, address indexed tcr);

    function registerTcr(string memory _name, address _address) onlyOwner public {
        tcrs[_name] = _address;
        emit TcrRegistered(_name, _address);
    }

    function getTcr(string memory _name) public view returns (address) {
        return tcrs[_name];
    }
}