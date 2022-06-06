import { ethers } from "hardhat";

async function main() {

  const TCR = await ethers.getContractFactory("Tcr");
  const tcr = await TCR.deploy(
    "Test Registry", "0x...", 
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
