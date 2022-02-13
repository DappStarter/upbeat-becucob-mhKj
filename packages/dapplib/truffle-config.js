require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift raise night huge gloom kitchen metal genius'; 
let testAccounts = [
"0x66e7ea0aab1efbc088178782070f5a40d1aff32d02f50ede00dc8847bd739949",
"0xe38af80c5258492189a8953b44fd32072d73760644e2fb50bf74975385f5d419",
"0x3078138f664a763c1015b568707d72bb56926ca8bfffd92d861496a9179ddf21",
"0x87ecf410241a9d2a8248258d2181d31d26b18d5093ee68c22a1325c882abeda1",
"0xf02a907343f7fc5a841b3dce0c9a4f9b9d0d26d4fc0e7857956b2a4cde72a098",
"0x45bdb8387e4bbc37689a60c0820703cbaa90a5dc9d7ef41a7d70225b417bff11",
"0xd135d092d5b655a87845c4a5bc694c7bccef0e41a9e934bebe4205550f33a5e3",
"0xc3dfa39365f3d1d6368564563bb8d7e0d6d8c9ac0f5a83bf5fd4ed67036671fe",
"0x4b262bc45eec2363997003f019f768cdc9e25982019a2b316f5089791c8558ec",
"0x0e03b75bdf3dc7646d0c6e7f3e2fcd63e4eb8877d39db407415268510a6f26f3"
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

