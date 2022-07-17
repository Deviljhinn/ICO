const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { DIGICOIN_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the Digicoin NFT contract that you deployed in the previous module
  const digiCoinNFTContract = DIGICOIN_NFT_CONTRACT_ADDRESS;

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so digiCoinTokenContract here is a factory for instances of our DigicoinToken contract.
    */
  const digiCoinTokenContract = await ethers.getContractFactory(
    "DigicoinToken"
  );

  // deploy the contract
  const deployedDigicoinTokenContract = await digiCoinTokenContract.deploy(
    digiCoinNFTContract
  );

  // print the address of the deployed contract
  console.log(
    "Digicoin Token Contract Address:",
    deployedDigicoinTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });