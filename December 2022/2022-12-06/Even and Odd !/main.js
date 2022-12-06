/*

Codewars, 7k: Even and Odd !

*/

const evenAndOdd = num => {
  const res = [];
  const numArr = num.toString().split('');
  let even = '';
  let odd = '';

  for (const i of numArr) {
    if (i % 2) {
      odd += i;
    } else {
      even += i;
    }
  }
  res.push(+even, +odd);
  return res;
}