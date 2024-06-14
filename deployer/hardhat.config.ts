import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"

import * as dotenv from "dotenv"


dotenv.config()

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
            url: `http://${process.env.INTERNAL_NODE_HOST}:${process.env.INTERNAL_NODE_PORT}`,
            chainId: Number(process.env.NODE_CHAIN_ID)
        }
    },

    etherscan: {
        apiKey: {
            localnet: "IS_NOT_REQUIRED_FOR_LOCAL_BLOCKSCOUT"
        },
        customChains: [{
            network: "localnet",
            chainId: Number(process.env.NODE_CHAIN_ID),
            urls: {
                apiURL: String(process.env.URL_EXPLORER_API),
                browserURL: String(process.env.URL_EXPLORER)
            }
        }]
    },
    sourcify: { enabled: false }
}


export default config
