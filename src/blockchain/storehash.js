import web3 from "./web3";

const address = "0xc11D3c76017C4eeA670923f86b465B0ACe02d9Be";
const abi = [
    {
        constant: true,
        inputs: [],
        name: "getHash",
        outputs: [
            {
                name: "x",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "x",
                type: "string",
            },
        ],
        name: "sendHash",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];

export default new web3.eth.Contract(abi, address);
