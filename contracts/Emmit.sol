// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

interface ContractWinner{
    function attempt()external;
}

contract EventWinner{
    // Function to call the attempt function on the ContractWinner instance at the given address
    function callWinner(address winnerContractAddress) external{
        ContractWinner (winnerContractAddress).attempt();
    }
}
