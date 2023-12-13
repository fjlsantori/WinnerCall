// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
/* const ethers = require('ethers');
require('dotenv').config(); */

async function main() {
    // The address of the winner contract that we want to call
  const winnerContractAddress = "0xDe20E9499df78195DC1348c52a9acDC4F08F8e66";
  // Get the EventWinner contract factory from the hardhat config
  const EventWinner = await hre.ethers.getContractFactory("EventWinner");
  // Deploy the EventWinner contract to the blockchain
  const eventWinner = await EventWinner.deploy();

  // Wait for the contract to be deployed
  await eventWinner.waitForDeployment();

  // Log the address of the deployed contract to the console
  console.log(`contract is deployed to ${eventWinner.target}`);

  // Call the callWinner function of the EventWinner contract and pass in the address of the winner contract
  const tx = await eventWinner.callWinner(winnerContractAddress);

  // Wait for the transaction to be confirmed on the blockchain
  await tx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
