import { ethers } from "hardhat";

async function main() {
  const FactoryAddress = "0x...";
  const tokenAddress = "0x...";
  const Factory = await ethers.getContractAt("TcrFactory", FactoryAddress);
  const tcr = await Factory.createTcr(
    "Test Registry",
    tokenAddress,
    [ethers.utils.parseEther("0.02"), 
    ethers.BigNumber.from("300"), 
    ethers.BigNumber.from("60")]
  );

  console.log("TCR deployed to:", tcr.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
