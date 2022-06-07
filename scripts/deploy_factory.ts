import { ethers } from "hardhat";

async function main() {
    const registryAddress = "0x..."
    const registry = await ethers.getContractAt("TcrRegistry", registryAddress);

    const Factory = await ethers.getContractFactory("TcrFactory");
    const factory = await Factory.deploy(registryAddress);
    
    await factory.deployed();
    await registry.transferOwnership(factory.address);

    console.log("TCR Factory deployed to:", factory.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
