/*

Codewars, 6k: No Order of Operations

*/

function noOrder(s) {
  const ope = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.floor(a / b),
    '^': (a, b) => a ** b,
    '%': (a, b) => a % b,
  }
  
  let equation = s.replace(/\s/g, '').split(/(\D)/).reverse();
  console.log(equation)
  while (equation.length > 1) {
    const a = +equation.pop();
    const o = equation.pop();
    const b = +equation.pop();
    console.log(a, b, o)
    equation.push(ope[o](a, b));
  }
  const res = +equation.pop();
  return isNaN(res) || !isFinite(res) ? null : res;
}