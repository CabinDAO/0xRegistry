var factory = artifacts.require("TcrFactory");
var registry = artifacts.require("TcrRegistry");
var token = artifacts.require("Token");

contract('Tcr Factory', async function (accounts) {
    let tokenInstance;
    let factoryInstance;
    let registryInstance;

    before(async () => {
        tokenInstance = await token.new("DemoToken", "DEMO", 21000000);
        registryInstance = await registry.new();
        factoryInstance = await factory.new(registryInstance.address);
    });

    it('should create a new TCR', async () => {
        let deployTx = await factoryInstance.createTcr(
            "DemoTCR",
            tokenInstance.address,
            [
                100,
                300, 
                60
            ]
          );
        const deployedName = deployTx.logs[0].args.name;
        const deployedAddress = deployTx.logs[0].args.tcr;
        
        let registerTx = await registryInstance.registerTcr(deployedName, deployedAddress);
        const registerAddress = registerTx.logs[0].args.tcr;

        assert(deployedAddress == registerAddress, "Deployed TCR address does not match registry");

    }
    );
        
});