import { ethers } from "hardhat"
import type { ERC20Token } from "../typechain-types"

async function main() {
    const [deployer] = await ethers.getSigners()
    console.log("Deploying contracts with the account:", deployer.address)

    const ERC20TokenCode = await ethers.getContractFactory("ERC20Token")
    const ERC20Token: ERC20Token = await ERC20TokenCode.deploy("Tether", "USDT", deployer.address)

    console.log("Token deployed to:", await ERC20Token.getAddress())
}

main().then(
    () => process.exit(0)
).catch(error => {
    console.error(error)
    process.exit(1)
})