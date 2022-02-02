import { ethers } from "hardhat";

async function main() {
  const Market = await ethers.getContractFactory("Market");
  const market = await Market.deploy();

  await market.deployed();

  console.log("Market deployed to:", market.address);

  const NFT = await ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(market.address);
  await nft.deployed();

  console.log("nft deployed to:", nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
