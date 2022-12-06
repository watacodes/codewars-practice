/*

Codewars, 7k: Hex Hash Sum

*/

const hexHash = code => {
  const hexContainer = [];
  [...code].forEach(num => hexContainer.push(num.charCodeAt(0).toString(16)));
  const onlyDigits = hexContainer.map(a => a.replace(/\D/g, '').split(''));
  return onlyDigits.flat().reduce((acc, curr) => +acc + +curr, 0);
}

console.log(hexHash('Yo'))