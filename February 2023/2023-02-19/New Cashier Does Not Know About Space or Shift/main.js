/*

Codewars, 6k: New Cashier Does Not Know About Space or Shift

*/

function getOrder(input) {
  const menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke'];
  const res = [];
  for (let dish of menu) {
    const regex = new RegExp(`${dish}`, 'gi');
    res.push(input.match(regex));
  }
  return res.filter(e => e).flat().map(e => e[0].toUpperCase() + e.slice(1)).join(' ');
}