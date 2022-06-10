const { getTrailingCommentRanges } = require("typescript");

var factory = artifacts.require("TcrFactory");
var registry = artifacts.require("TcrRegistry");
var token = artifacts.require("Token");

contract('Tcr Factory', async function (accounts) {
    let tokenInstance;
    let factoryInstance;
    let registryInstance;

    before(async () => {
        registryInstance = await registry.new();
        factoryInstance = await factory.new(registryInstance.address);
    });

    it('should create a new TCR', async () => {
        const deployTx = await factoryInstance.createTcr(
            "DemoToken",
            "DEMO",
            21000000,
            "DemoTCR",
            [
                100,
                300, 
                60
            ]
          );
        const deployedAddress = deployTx.logs[1].args.tcr;
        const registryAddress = await registryInstance.getTcr("DemoTCR");
        assert.equal(deployedAddress, registryAddress, "Deployed TCR address does not match registry");
    }
    );
        
});