/*

Codewars, 7k: Search for letters


*/

const change = string => {
  let alphabet = Array.apply(null, Array(26)).map(c => '0');
  string.toLowerCase().replace(/[^a-z]/g, '').split('').forEach(c => alphabet[c.charCodeAt(0) - 97] = 1 || c)
  return alphabet.join('');
};

console.log(change("a **&  bZ"))

console.log(String.fromCharCode(97))

console.log('111111111111111111111111111111'.length);
console.log('11111111111111111111111111'.length);

console.log('1000001000000000010100000'.length);
console.log('10000010000000000101000000'.length);