import { ethers } from "hardhat";

async function main() {
  const FactoryAddress = "0x...";
  const RegistryAddress = "0x...";

  const Factory = await ethers.getContractAt("TcrFactory", FactoryAddress);
  const Registry = await ethers.getContractAt("TcrRegistry", RegistryAddress);

  const abi = [ "event TcrCreated(string indexed name, address indexed tcr)" ];
  const iface = new ethers.utils.Interface(abi);

  const tx = await Factory.createTcr(
    "DemoToken",
    "DEMO",
    ethers.BigNumber.from("21000000"),
    "NeighborhoodTCR",
    [ethers.utils.parseEther("0.02"), 
    ethers.BigNumber.from("300"), 
    ethers.BigNumber.from("60")]
  );
  const txReceipt = await tx.wait();
  const log = iface.parseLog(txReceipt.logs[1]);
  const { tcr } = log.args;
  console.log("TCR deployed to:", tcr );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
