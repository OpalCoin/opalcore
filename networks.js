var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('a1a0a2a1'),
  addressVersion: 115,
  privKeyVersion: 243,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('162e765391bf01f9dabaa3fbde9d1111d1ef162217a25362dcf60d4b0c090000'),
    merkle_root: hex('fbec448cda31e81bb3cf270a52e4c0011ea70956ab256ac8401dc983c00f78e9'),
    height: 0,
    nonce: 2799917,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1407013385,
    bits: 1e0fffff
  },
  dnsSeeds: [
    'seed.opal-coin.com'
  ],
  defaultClientPort: 51990,
  lastPoWBlock: 15000
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('fec3b9de'),
  addressVersion: 111,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('14D879BCBC6DB4A5F49B15AB710BD3F1DC1FF65361F10B3F6E58649C518DDB46'),
    merkle_root: hex('FF79AF16A9FFEB1B826DE1EA7F24539A2FE3702FE987912B09072BC41DBC02B5'),
    height: 0,
    nonce: 1403777,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1399544585,
    bits: 504365040
  },
  dnsSeeds: [],
  defaultClientPort: 55444,
  lastPoWBlock: 150
};
