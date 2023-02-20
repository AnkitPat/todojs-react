var CryptoJS = require("crypto-js");
var {encrypt, decrypt} = require("crypto-js");

export function encryptEmail(email){
    // let ciphertext = CryptoJS.AES.encrypt(email, 'secret key 123').toString();
    let ciphertext = encrypt(Buffer.from(email,"utf-8"))
    return ciphertext
}

export function decryptEmail(email){
    // let bytes  = CryptoJS.AES.decrypt(email, 'secret key 123');
    // let originalText = bytes.toString(CryptoJS.enc.Utf8);

    // return originalText
    return decrypt(email)
}