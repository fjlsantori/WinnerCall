// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Emmit{
    function emmitWinner(address winner) external{
        (bool success,) = winner.call(
            abi.encodeWithSignature("attemp()")
        );
        require(success);
    }

}