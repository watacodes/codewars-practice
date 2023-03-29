/*

Codewars, 6k: Fraction to periodic decimal

*/

function fractionToPeriodic(n, d) {
  let result = '';
  let rest = [];
  result += parseInt(n / d).toString();
  let modulo = n % d;
  
  while (modulo != 0) {
    if (result.indexOf('.') == -1)
      result += '.';
      rest.push(modulo);
      n = 10 * modulo;
      modulo = n % d;
      result += parseInt(n / d).toString();

    if (rest.indexOf(modulo) > -1) {
      result = result.substring(0, result.indexOf('.') + rest.indexOf(modulo) + 1) + '(' + result.substring(result.indexOf('.') + rest.indexOf(modulo) + 1) + ')';
      break;
    }
  }
  return result;
}