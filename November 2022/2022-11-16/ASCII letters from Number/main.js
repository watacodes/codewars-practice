/*

Codewars, 7k: ASCII letters from Number

*/

function convert(number){
  let arr = [];
  for (let i = 0; i < number.length; i += 2) {
    arr.push(number.slice(i, i+2));
  }
  return arr.map(a => String.fromCharCode(a)).join('');
}

console.log(convert('656667'))