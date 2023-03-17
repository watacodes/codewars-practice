/*

Codewars, 6k: Clean up your Gibberish!

*/

function cleanItUp(str) {
  str = str.replace(/[^a-z]/gi, '');
  const res = [];
  for (let i = 0; i < str.length; i += 5) {
    let chunk = str.slice(i, i+5);
    if (chunk.length < 5) {
      break;
    }
    chunk = chunk[0].toUpperCase() + chunk.slice(1).toLowerCase();
    res.push(chunk);
  }
  return res.join(' ');
}