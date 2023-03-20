/*

Codewars, 6k: Shopping List

*/

function shoppingListCost(arr) {
  if (!arr) return 0;
  
  let sum = 0;
  
  for (const list of arr) {
    let [item, quantity] = [list[0], list[1]];
    
    while (quantity > 0) {
      if (groceries[item].bogof) {
        quantity--;
      }
      sum += groceries[item].discount ? groceries[item].price * ((100 - groceries[item].discount) / 100) : groceries[item].price;
      quantity--;
    }
  }
  
  return parseFloat(sum.toFixed(2));
}