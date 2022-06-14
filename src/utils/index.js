var CryptoJS = require("crypto-js");

export function encryptEmail(email){
    let ciphertext = CryptoJS.AES.encrypt(email, 'secret key 123').toString();
    return ciphertext
}

export function decryptEmail(email){
    let bytes  = CryptoJS.AES.decrypt(email, 'secret key 123');
    let originalText = bytes.toString(CryptoJS.enc.Utf8);

    return originalText
}