/*

Codewars, 7k: Graceful Tipping

*/

function gracefulTipping(bill) {
  const tipAdded = bill * 1.15;
  console.log(tipAdded)
  if (tipAdded < 10) return Math.ceil(tipAdded);
  if (tipAdded <= 99.99) return Math.ceil(tipAdded / 5) * 5;
  if (tipAdded <= 999.99) return Math.ceil(tipAdded / 50) * 50;
  if (tipAdded <= 9999.99) return Math.ceil(tipAdded / 500) * 500;
  if (tipAdded <= 99999.99) return Math.ceil(tipAdded / 5000) * 5000;
  if (tipAdded <= 999999.99) return Math.ceil(tipAdded / 50000) * 50000;
  if (tipAdded <= 9999999.99) return Math.ceil(tipAdded / 500000) * 500000;
  if (tipAdded <= 99999999.99) return Math.ceil(tipAdded / 5000000) * 5000000;

}