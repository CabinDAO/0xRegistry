var factory = artifacts.require("TcrFactory");
var registry = artifacts.require("TcrRegistry");
var token = artifacts.require("Token");

contract('Tcr Factory', async function (accounts) {
    let tcrFactoryInstance;
    let tcrRegistryInstance;
    before(async () => {
        tcrFactoryInstance = await factory.deployed();
        tcrRegistryInstance = await registry.deployed();
        tokenInstance = await token.deployed();

    });
    //It should create a new TCR and register it in the registry
    it('should create a new TCR', async () => {
        let deployTx = await tcrFactoryInstance.Factory.createTcr(
            "Neighborhood TCR",
            tokenAddress,
            [ethers.utils.parseEther("0.02"), 
            ethers.BigNumber.from("300"), 
            ethers.BigNumber.from("60")]
          );
        const deployedAddress = deployedTx.logs[0].args.tcr;

        let registerTx = await tcrRegistryInstance.registerTcr(deployedAddress);
        const registerAddress = registerTx.logs[0].args.tcr;
        assert(deployedAddress == registerAddress, "Deployed TCR address does not match address in registry");
    }
    );
        
});