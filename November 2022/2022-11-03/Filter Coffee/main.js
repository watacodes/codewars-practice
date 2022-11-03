/*

Codewars, 7k: Filter Coffee

first argument => budget
second argument => an array of coffee bean prices

return => the stores that sell coffee beans within my budget.

*/


const search = (budget, prices) => {
  return prices.filter(bean => bean <= budget).sort((a, b) => a - b).join(',');
};

console.log(search(14, [7, 3, 23, 9, 14, 20, 7]))
