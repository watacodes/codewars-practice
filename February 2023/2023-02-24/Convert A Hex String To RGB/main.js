/*

Codewars, 5k: Convert A Hex String To RGB

*/

function hexStringToRGB(hex) {
  hex = hex.slice(1);
  const hexArr = [];
  for (let i = 0; i < hex.length; i += 2) {
    hexArr.push(hex[i] + hex[i + 1]);
  }
  const res = {};
  for (let i = 0; i < 3; i++) {
    if (i === 0) res.r = parseInt(hexArr[i], 16);
    if (i === 1) res.g = parseInt(hexArr[i], 16);
    if (i === 2) res.b = parseInt(hexArr[i], 16);
  }
  return res;
}


console.log(hexStringToRGB("#FF9933"));