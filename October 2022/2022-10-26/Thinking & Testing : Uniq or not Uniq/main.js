/*

Codewars, 7k: Thinking & Testing : Uniq or not Uniq

*/

function testit(a,b){
  return [...new Set(a)].concat([...new Set(b)]).sort((a, b) => a - b);
}