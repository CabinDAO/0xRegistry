import { ethers } from "hardhat";

async function main() {
    const registryAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
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
