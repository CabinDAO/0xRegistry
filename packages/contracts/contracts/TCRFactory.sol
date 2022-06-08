// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import "./TCR.sol";
import "./TCRRegistry.sol";

contract TcrFactory {
    TcrRegistry public tcrRegistry;
    event TcrCreated(string indexed name, address indexed tcr);

    constructor (address registryAddress){
        tcrRegistry = TcrRegistry(registryAddress);
    }

    function createTcr(
        string memory _name,
        address _token,
        uint[] memory _parameters
    )  public {
        Tcr tcr  = new Tcr(_name, _token, _parameters);
        tcrRegistry.registerTcr(_name, address(tcr));
        emit TcrCreated(_name, address(tcr));
    }
}