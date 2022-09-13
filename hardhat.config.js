require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-mainnet.g.alchemy.com/v2/2gAmTF-X4O_LxQsJYRKCToBzVXvpFEA6",
      accounts: [
        "a01cd04809e894aa6945811a597bc59cae7ca63643291b9d8bfdc62fdba0845a",
      ],
    },
  },
};
