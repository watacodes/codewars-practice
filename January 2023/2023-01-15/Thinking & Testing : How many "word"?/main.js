/*

Codewars, 7k: Thinking & Testing : How many "word"?

*/

function testit(s) {
  return (s.match(/w.*?o.*?r.*?d.*?/gi) || []).length;
}