// import nacl from "tweetnacl";

import React, { useState, useEffect } from 'react'
// import * as https from 'https';

// export function byteToHexString(uint8arr) {
//     if (!uint8arr) {
//         return '';
//     }

//     let hexStr = '';
//     const radix = 16;
//     const magicNumber = 0xff;
//     for (let i = 0; i < uint8arr.length; i++) {
//         let hex = (uint8arr[i] & magicNumber).toString(radix);
//         hex = (hex.length === 1) ? '0' + hex : hex;
//         hexStr += hex;
//     }

//     return hexStr;
// }

// function hexStringToByte(str) {
//     if (typeof str !== 'string') {
//         throw new TypeError('Wrong data type passed to convertor. Hexadecimal string is expected');
//     }
//     const twoNum = 2;
//     const radix = 16;
//     const uInt8arr = new Uint8Array(str.length / twoNum);
//     for (let i = 0, j = 0; i < str.length; i += twoNum, j++) {
//         uInt8arr[j] = parseInt(str.substr(i, twoNum), radix);
//     }
//     return uInt8arr;
// }

// function hex2ascii(hexx) {
//     const hex = hexx.toString();
//     let str = '';
//     for (let i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
//         str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
//     return str;
// }

// // insert your api keys
// const publicKey = "f6ac518d1f1bd0aeed03ae5ed85c91489c94fa6cdc80c6d6af0ec92d62ac3086";
// const secretKey = "b67e2848ffe8a6d79370745a288dbb455c4e5927386e7ccf98df9de15ee62d69f6ac518d1f1bd0aeed03ae5ed85c91489c94fa6cdc80c6d6af0ec92d62ac3086";
// const host = 'api.dmarket.com';

// function getFirstOfferFromMarket() {
//     const requestOptions = {
//         host: host,
//         path: '/exchange/v1/market/items?gameId=a8db&limit=1&currency=USD',
//         method: 'GET',
//     };

//     // you can use a more high-level wrapper for requests instead of native https.request
//     // check https://github.com/axios/axios as an example
//     return new Promise(function(resolve, reject) {
//         const request = https.request(requestOptions, (response) => {
//             let body = [];
//             response.on('data', function(chunk) {
//                 body.push(chunk);
//             });
//             // resolve on end
//             response.on('end', function() {
//                 try {
//                     body = JSON.parse(Buffer.concat(body).toString());
//                 } catch(e) {
//                     reject(e);
//                 }
//                 resolve(body['objects'][0]);
//             });
//         });
//         request.end();
//     });
// }

// function buildTargetBodyFromOffer(offer) {
//     return {
//         "targets": [
//             {
//                 "amount": 1, "gameId": offer.gameId, "price": {"amount": "2", "currency": "USD"},
//                 "attributes": {
//                     "gameId": offer.gameId, "categoryPath": offer.extra.categoryPath, "title": offer.title,
//                     "name": offer.title,
//                     "image": offer.image,
//                     "ownerGets": {"amount": "1", "currency": "USD"}
//                 }
//             }]
//     }
// }

// function sign(string) {
//     const signatureBytes = nacl.sign(new TextEncoder('utf-8').encode(string), hexStringToByte(secretKey));
//     return byteToHexString(signatureBytes).substr(0,128);
// }

// function sendNewTargetRequest(requestOptions, targetRequestBody) {
//     const req = https.request(requestOptions, (response) => {
//         console.log('statusCode:', response.statusCode);
//         response.on('data', (responseBodyBytes) => {
//             console.log(hex2ascii(byteToHexString(responseBodyBytes)));
//         });
//     });

//     req.on('error', (e) => {
//         console.error(e);
//     });

//     req.write(targetRequestBody);
//     req.end();
// }

// async function createTestTarget() {
//     const randomOffer = await getFirstOfferFromMarket();
//     console.log('Offer was found: ' + randomOffer.title);

//     const method = "POST";
//     const apiUrlPath = "/exchange/v1/target/create";
//     const targetRequestBody = JSON.stringify(buildTargetBodyFromOffer(randomOffer));
//     console.log(targetRequestBody);
//     const timestamp = Math.floor(new Date().getTime() / 1000);
//      const stringToSign = method + apiUrlPath + targetRequestBody + timestamp;
//     const signature = sign(stringToSign);
//     const requestOptions = {
//         host: host,
//         path: apiUrlPath,
//         method: method,
//         headers: {
//             "X-Api-Key": publicKey,
//             "X-Request-Sign": "dmar ed25519 " + signature,
//             "X-Sign-Date": timestamp,
//             'Content-Type': 'application/json',
//         }
//     };

//     sendNewTargetRequest(requestOptions, targetRequestBody);
// }


// createTestTarget();

const [data, setData] = useState([]);


useEffect(() => {
    loadUserData();
}, []);

const loadUserData = async () => {
    const responce = await fetch(`https://api.dmarket.com/exchange/v1/offers-by-title?Title=CS%3AGO&Limit=24`, {
     method: 'GET',
     headers: {
      'Content-Type': 'application/json',
      'Authorization': "f6ac518d1f1bd0aeed03ae5ed85c91489c94fa6cdc80c6d6af0ec92d62ac3086",
     }
   });
   const Json = await responce.json()
//    console.log(Json)
   setData(Json)
       
    }

   