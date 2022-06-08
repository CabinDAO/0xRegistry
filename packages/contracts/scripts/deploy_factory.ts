import { ethers } from "hardhat";

async function main() {
    const registryAddress = "0x2E8891AA76743ee96547AcB764a69b87872423f8";

    const Factory = await ethers.getContractFactory("TcrFactory");
    const factory = await Factory.deploy(registryAddress);
    
    await factory.deployed();

    console.log("TCR Factory deployed to:", factory.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
