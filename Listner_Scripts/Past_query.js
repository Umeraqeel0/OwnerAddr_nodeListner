const Web3 = require('web3')
//const client = require('node-rest-client-promise').Client();
const nftAddress = "0xE1f9015231Ed6FFf44c0BFAfF28C2950e5052aeF";
const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://rinkeby.infura.io/ws/v3/20b220940ae24e3a9d1c1b0968778dcd'));

const nftBuild = require('../build/contracts/NFT.json')
const nftContract = new web3.eth.Contract(nftBuild.abi, nftAddress);


const START_BLOCK = 0;
const END_BLOCK =100000000000;
nftContract.getPastEvents("Transfer",
    {                               
        fromBlock: START_BLOCK,     
        toBlock: END_BLOCK // You can also specify 'latest'          
    })                              
.then(events => console.log(events))
.catch((err) => console.error(err));

//main()