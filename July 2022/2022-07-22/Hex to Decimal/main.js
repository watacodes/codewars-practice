/*

Codewars challenge, 8k: https://www.codewars.com/kata/57a4d500e298a7952100035d

Complete the function which converts hex number (given as a string) to a decimal number.

*/

const hexToDec = hexString => {
    return parseInt(hexString, 16);
};

console.log(hexToDec("FF"))