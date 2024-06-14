import { ethers } from "hardhat"
import type { ERC20Token } from "../typechain-types"
import type { CryptonPass } from "../typechain-types"

async function DeployERC20Token() {
    const [deployer] = await ethers.getSigners()
    console.log("Deploying contracts with the account:", deployer.address)

    const ERC20TokenCode = await ethers.getContractFactory("ERC20Token")
    const ERC20Token: ERC20Token = await ERC20TokenCode.deploy("Tether", "USDT", deployer.address)

    console.log("Token deployed to:", await ERC20Token.getAddress())
}

async function DeployCryptonPass() {
    const [deployer] = await ethers.getSigners()
    console.log("Deploying contracts with the account:", deployer.address)
    
    const CryptonPassCode = await ethers.getContractFactory("CryptonPass")
    const CryptonPass: CryptonPass = await CryptonPassCode.deploy(deployer.address)
    
    console.log("Token deployed to:", await CryptonPass.getAddress())
}

async function main() {
    DeployERC20Token()
    DeployCryptonPass()
}

main().then(
    () => process.exit(0)
).catch(error => {
    console.error(error)
    process.exit(1)
})