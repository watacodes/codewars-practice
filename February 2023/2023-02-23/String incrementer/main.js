/*

Codewars, 5k: String incrementer

*/

function incrementString (str) {
  if (!str.match(/\d/)) return str + '1';
  const digits = str.match(/\d+$/g).join('');
  const digitsLength = digits.length;
  const incrementedDigits = +digits + 1;
  return !str.match(/[a-z]/gi) ? String(incrementedDigits).padStart(digitsLength, '0') : str.slice(0, -digitsLength) + String(incrementedDigits).padStart(digitsLength, '0'); 
}

console.log(incrementString('fooboo123'));

console.log(incrementString('fooboo000'));