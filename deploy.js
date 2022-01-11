const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
    "hawk engage wage two wreck educate example garage relief circle nasty detail",
    "https://rinkeby.infura.io/v3/c0d543ec6f5645c8a89cbfddde3917b0"
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy from account", accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: "1000000", from: accounts[0] });

    console.log("Contract deployed to", result.options.address);

    provider.engine.stop();
};

deploy();

// Attempting to deploy from account 0xFfdc2bb0106Cb487ac8937ec68b875d087aD631F
// Contract deployed to 0xcd969d0856EE610119263bAe262af663605DBbe5