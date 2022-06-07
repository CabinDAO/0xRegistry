import { ethers } from "hardhat";

async function main() {

  const Token = await ethers.getContractFactory("tcr");
  const token = await Token.deploy("DemoToken", "DEMO", ethers.BigNumber.from(21000000));

  await token.deployed();

  console.log("ERC20 token deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
