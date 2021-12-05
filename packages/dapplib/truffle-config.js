require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture strategy cruise soap history grid credit frame talk'; 
let testAccounts = [
"0x38683633c61825afd1cdacf83788c842631ab508482c6e69e261dba2667a6575",
"0x7d64dfc2463f137923dafb53d95c039aa9f4d36f6622f7c5dc5a4325bab157de",
"0x8e67ea800352c5ad84c7b4bc045793150be3c492cb4e792dd6e4f21e2cadba48",
"0x58dc8b1b188d83ee87c3b4106dc5fb741599f6852ac0a06dde2641d988ae530e",
"0x59658d831f3434dedf5c183cf347d3a15c177ea58bdac02efc78de08db6144ea",
"0x94f7b6da292257d5f8ef290fef5d11af3b827e1db6db49848ee23ae195b511c8",
"0x668fc8e284f4d6de5b1654d3479b453bca75f8168dc1952df39eec0470b60548",
"0x16c27d9e3a3ec21413312435b9853bb50efe6ce04801b928ef06a57374a66873",
"0xa413316003b8ef73c72fc09046d32c71dbcb55fc909ce0eae1b7c1c56c32c669",
"0x73095d8a2667ffdf5ca03df343e61004813b830a1354f29895f5f966bda43cbd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

