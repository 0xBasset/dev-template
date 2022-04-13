require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

// Keys
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RINKEBY_KEY = process.env.RINKEBY_KEY;

// URLs
const MAINNET_URL = process.env.MAINNET_URL || "";
const RINKEBY_URL = process.env.RINKEBY_URL || "";


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	solidity: {
		version: "0.8.7",
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
	networks: {
		hardhat: {
			accounts: [
				{
					privateKey: PRIVATE_KEY,
				},
			],
		},
		rinkeby: {
			url: `${RINKEBY_URL}`,
			accounts: RINKEBY_KEY !== undefined ? [RINKEBY_KEY] : [],
		},
		mainnet: {
			url: MAINNET_URL,
			accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
		},
	},
	etherscan: {
		// Your API key for Etherscan
		// Obtain one at https://etherscan.io/
		
		apiKey: process.env.ETHERSCAN_API_KEY
  	},

	paths: {
		sources: "./contracts",
		cache: "hh-cache",
		artifacts: "./artifacts"
	},
};
