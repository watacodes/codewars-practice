/*

Codewars, 7k: Binary Calculator

*/

const calculate = (n1, n2, o) => {
  const n1Dec = parseInt(n1, 2);
  const n2Dec = parseInt(n2, 2);
  if (o === 'add') {
    return (+n1Dec + +n2Dec).toString(2)
  }
  
  if (o === 'subtract') {
    return (+n1Dec - +n2Dec).toString(2);
  }
  
  if (o === 'multiply') {
    return (+n1Dec * +n2Dec).toString(2);
  }
}