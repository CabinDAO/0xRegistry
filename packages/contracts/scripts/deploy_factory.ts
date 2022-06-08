import { ethers } from "hardhat";

async function main() {
    const registryAddress = "0xd321949Ec9e8dE5c60323FcD247Ce2Ec8eB64eEE";

    const Factory = await ethers.getContractFactory("TcrFactory");
    const factory = await Factory.deploy(registryAddress);
    
    await factory.deployed();

    console.log("TCR Factory deployed to:", factory.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
