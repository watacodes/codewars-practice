/*

Codewars, 7k: Calculate Meal Total

*/

function calculate_total(subtotal, tax, tip) {
  return +((subtotal + subtotal * (tax / 100) + subtotal * (tip / 100)).toFixed(2));
}