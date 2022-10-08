/*

Codewars, 7k: Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product

Count the number of exclamation marks and question marks, return the product.

Examples
Product("") == 0
product("!") == 0
Product("!ab? ?") == 2
Product("!!") == 0
Product("!??") == 2
Product("!???") == 3
Product("!!!??") == 6
Product("!!!???") == 9
Product("!???!!") == 9
Product("!????!!!?") == 20

*/

const product = s => {
  let ex = 0;
  let qs = 0;
  s.split('').forEach(a => {
    if (a === '!') {
      ex++;
    }
    if (a === '?') {
      qs++;
    }
  });
  return ex * qs;
};

console.log(product('!????!!!?'));