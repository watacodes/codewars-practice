/*

Codewars, 7k: Most sales

*/

const top3 = (products, amounts, prices) => {
  const highestRevenue = [];
  const indices = [];

  for (let p in amounts) {
    highestRevenue.push(amounts[p] * prices[p]);
  }
  
  const sortedRevenue = highestRevenue.slice(0).sort((a, b) => b - a);
  
  for (let k in sortedRevenue) {
    indices.push(highestRevenue.indexOf(sortedRevenue[k]));
  }
  
  const res = [];
  
  for (let i of indices) {
    res.push(products[i]);
  }
  return res.slice(0, 3);
}