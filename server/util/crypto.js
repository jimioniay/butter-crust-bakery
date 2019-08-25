const crypto = require('simple-crypto-js');

exports.encryptValue = value => {
  let encryptedValue = '';
  const encryptInstance = new crypto(process.env.SECRET_KEY);
  encryptedValue = encryptInstance.encrypt(value);
  return encryptedValue;
};

exports.decryptValue = value => {
  let decryptedValue = '';
  const decryptInstance = new crypto(process.env.SECRET_KEY);
  decryptedValue = decryptInstance.decrypt(value);
  return decryptedValue;
};
