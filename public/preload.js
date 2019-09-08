const { ipcRenderer } = require('electron');

let Web3 = require('web3')
let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io'));


window.ipcRenderer = ipcRenderer;
window.web3 = web3