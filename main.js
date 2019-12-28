const {Blockchain, Transaction} = require('./Blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('d4cef0921838c03935c258c6e6498ebf573f6cf0f2a23176eceaae35479df8e5');
const myWalletAddress = myKey.getPublic('hex');

let Graves = new Blockchain();

const tx1 = new Transaction(myWalletAddress,'public key',10);
tx1.signTransaction(myKey);
Graves.addTransaction(tx1);

console.log('\n Starting the miner... ');
Graves.minePendingTransactions(myWalletAddress);

console.log('\n The balance of add1 is', Graves.getBalanceOfAddress(myWalletAddress));