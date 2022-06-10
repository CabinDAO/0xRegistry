// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

contract TcrRegistry {

    mapping (string => address) internal tcrs;
    event TcrRegistered(string indexed name, address indexed tcr);

    function registerTcr(string memory _name, address _address) public {
        tcrs[_name] = _address;
        emit TcrRegistered(_name, _address);
    }

    function getTcr(string memory _name) public view returns (address) {
        return tcrs[_name];
    }
}