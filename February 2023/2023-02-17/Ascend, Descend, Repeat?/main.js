/*

Codewars, 6k: Ascend, Descend, Repeat?

*/

function ascendDescend(len, min, max) {
  const res = [];
  let currentValue = min;
  let status = true;
  if (len === 0 || min > max) return '';
  if (min === max) return `${min}`.repeat(len);
  const lengthCheck = (arr) => {
    if (arr.map(e => +e).join('').length >= len) {
      return true;
    }
  }

  for (let i = 0; i < len; i++) {
    if (lengthCheck(res)) return res.map(e => +e).join('').slice(0, len);
    if (i === 0) {
      res.push(currentValue);
    } else if (i !== 0 && status) {
      currentValue++;
      if (currentValue === max) status = false;
      res.push(currentValue);
    } else {
      currentValue--;
      if (currentValue === min) status = true;
      res.push(currentValue);
    }
    if (len === 1) i--;
  }
  return res.map(e => +e).join('');
}



console.log(ascendDescend(5, 1, 3, "12321"));
console.log(ascendDescend(14, 0, 2, '01210121012101'));
console.log(ascendDescend(1, -5, -4)); // '-'
console.log(ascendDescend(25, -9, -3)) // '-9-8-7-6-5-4-3-4-5-6-7-8-'