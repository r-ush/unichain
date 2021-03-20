import web3 from "./web3";

const address = "0x71348821C6Fe35c1De9277038de1004A8321e45f";
const abi = [
    {
        inputs: [],
        name: "getHash",
        outputs: [
            {
                internalType: "string",
                name: "inputdata",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "inputdata",
                type: "string",
            },
        ],
        name: "sendHash",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];

export default new web3.eth.Contract(abi, address);
