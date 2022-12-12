/*

Codewars, 7k: Most sales

*/

const top3 = (products, amounts, prices) => {
  const highestRevenue = [];
  for (let i in products) {
    highestRevenue.push({
      productName: products[i],
      price: amounts[i] * prices[i]
    });
  }
  return highestRevenue.sort((a, b) => b.price - a.price || products.indexOf(a.productName) - products.indexOf(b.productName)).slice(0, 3).map(a => a.productName);
}