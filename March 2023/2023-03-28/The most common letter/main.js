/*

Codewars, 6k: The most common letter

*/

function replaceCommon(str, letter) {
  const occurrence = [...str.slice().replace(/[ ]/g, '')].reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  
  const entries = Object.keys(occurrence).sort((a, b) => occurrence[b] - occurrence[a]);
  
  const res = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === entries[0]) {
      res.push(letter);
    } else {
      res.push(str[i]);
    }
  }
  
  return res.join('');
}