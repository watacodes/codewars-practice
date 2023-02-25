/*

Codewars, 5k: Caesar Cipher Helper

*/

class CaesarCipher {
  constructor (shift) {
    this.shift = shift;
    this.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  
  encode(str) {
    return [...str.toUpperCase()].map(e => {
      if (/[A-Z]/.test(e)) {
        let pos = this.alpha.indexOf(e) + this.shift;
        return pos >= 26 ? this.alpha.charAt(pos % 26) : this.alpha.charAt(pos);
      } else {
        return e;
      }
    }).join('');
  }
  
  decode(str) {
    return [...str.toUpperCase()].map(e => {
      if (/[A-Z]/.test(e)) {
        let pos = this.alpha.indexOf(e) - this.shift;
        return pos < 0 ? this.alpha.slice(pos, pos+1) : this.alpha.charAt(pos);
      } else {
        return e;
      }
    }).join('');
  }
};