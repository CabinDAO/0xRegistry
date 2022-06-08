// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import "./TCR.sol";
import "./TCRRegistry.sol";
import "./Token.sol";
import "@openzeppelin/contracts/utils/Context.sol";

contract TcrFactory {
    TcrRegistry public tcrRegistry;
    event TcrCreated(string indexed name, address indexed tcr);
    event TokenCreated(string indexed name, address indexed token);

    constructor (address registryAddress){
        tcrRegistry = TcrRegistry(registryAddress);
    }

    function createTcr(
        string memory _tokenName,
        string memory _tokenSymbol,
        uint _initialSupply,
        string memory _tcrName,
        uint[] memory _tcrParameters
    )  public {
        require(_initialSupply > 0, "Initial supply must be greater than 0");
        require(_tcrParameters.length > 0, "TCR parameters must be greater than 0");

        Token token = new Token(_tokenName, _tokenSymbol, _initialSupply);
        token.transfer(msg.sender, _initialSupply);
        Tcr tcr  = new Tcr(_tcrName, address(token), _tcrParameters);
        tcrRegistry.registerTcr(_tcrName, address(tcr));
        
        emit TokenCreated(_tokenName, address(token));
        emit TcrCreated(_tcrName, address(tcr));
    }
}