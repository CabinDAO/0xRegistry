import { ethers } from "hardhat";

async function main() {
  const FactoryAddress = "0x...";
  const Factory = await ethers.getContractAt("TcrFactory", FactoryAddress);
  const tcr = await Factory.createTcr(
    "Test Registry",
    "0x...", // ERC20 token address 
    [ethers.utils.parseEther("0.02"), 
    ethers.BigNumber.from("300"), 
    ethers.BigNumber.from("60")]
  );

  await tcr.deployed();

  console.log("TCR deployed to:", tcr.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
