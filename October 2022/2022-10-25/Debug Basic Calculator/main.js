/*

Codewars, 7k: Debug Basic Calculator


*/

const calculate = function calculate(a, o, b) {
 
  let result = 0;
 
  if (o === "+") { 
    return a + b;
  }
  
  if (o === "-") { 
    return a - b;
  }
  
  if (o === "*") {
    return a * b;
  }
 
  if (o === '/' && b !== 0) {
    return a / b;
  }  
  return null;
}