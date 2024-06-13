import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"

const config: HardhatUserConfig = {
    solidity: "0.8.20",
    
    paths: {
        sources: "./contracts",
        cache: "./data/cache",
        artifacts: "./data/artifacts"
    },

    defaultNetwork: "hardhat",
    networks: {
        localnet: {
            url: "http://192.168.88.254:8545"
        },
        // localnet: {
        //     url: "",
        //     chainId: 31337,
        //     accounts: [] // env
        // }
    }
}

export default config
