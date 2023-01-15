/*

Codewars, 7k: Thinking & Testing : Incomplete string

*/

function testit(s) {
  if (s.length <= 1) return s;
  return s.replace(/../g, (s) => {
    let charCode = (s.charCodeAt(0) + s.charCodeAt(1)) / 2;
    return String.fromCharCode(charCode);
  });
}