/*

Codewars, 7k: You got change?

1, 5, 10, 20, 50, 100

*/

const giveChange = amount => {
  console.log(amount)
  if (amount === 0) return [0, 0, 0, 0, 0, 0];
  const res = [];
  if (amount / 100 >= 0) {
    res.push(Math.floor(amount / 100));
    amount = amount % 100;
  } 
  if (amount / 50 >= 0) {
    res.push(Math.floor(amount / 50));
    amount = amount % 50;
  } 
  
  if (amount / 20 >= 0) {
    res.push(Math.floor(amount / 20));
    amount = amount % 20;
  } 
  
  if (amount / 10 >= 0) {
    res.push(Math.floor(amount / 10));
    amount = amount % 10;
  } 
  
  if (amount / 5 >= 0) {
    res.push(Math.floor(amount / 5));
    amount = amount % 5;
  } 
  
  if (amount / 1 >= 0) {
    res.push(Math.floor(amount / 1));
  }
  return res.reverse();
};

console.log(giveChange(365))