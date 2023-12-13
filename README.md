
AU - Week 4 Assigment "Ready to be a Winner?

Your Goal: Emit the Winner event

Your goal is simple! Emit the winner event on this smart contract on the Goerli testnet: https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#code

SEPOLIA: https://sepolia.etherscan.io/address/0xDe20E9499df78195DC1348c52a9acDC4F08F8e66#events
0xDe20E9499df78195DC1348c52a9acDC4F08F8e66

If you take a look at the Code tab in Etherscan, you'll see that the source code for this contract looks like this:

`````` Solidity
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Contract {
    event Winner(address);

    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender);
    }
}
``````

How do we possibly make it so the tx.origin (the EOA who originated the transaction) is not equal to the msg.sender? 🤔

We'll leave that challenge up to you!


This is my contract deployed: https://sepolia.etherscan.io/address/0xe433c4443f82fc80913454bbc03e475908f6ea23


# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
