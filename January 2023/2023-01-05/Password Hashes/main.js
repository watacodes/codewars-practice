/*

Codewars, 7k: Password Hashes

*/

const crypto = require('crypto');

function passHash(str) {
  return crypto.createHash('md5').update(str).digest('hex');
}