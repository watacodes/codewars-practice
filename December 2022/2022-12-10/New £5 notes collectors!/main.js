/*

Codewars, 7k: New £5 notes collectors!

*/

const getNewNotes = (salary, bills) => {
  const billsSum = bills.reduce((acc, curr) => acc + curr, 0);
  return billsSum >= salary ? 0 : Math.floor((salary - billsSum) / 5)
}