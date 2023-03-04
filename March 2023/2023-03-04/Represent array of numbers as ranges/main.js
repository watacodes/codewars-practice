/*

Codewars, 5k: Represent array of numbers as ranges

*/

function toRange(arr) {
  const sorted = [...new Set(arr)].map(e => +e).sort((a, b) => a - b);
  const converted = sorted.map((curr, idx, array) => idx === 0 ? curr : (array[idx-1] + 1 === +curr) ? '_' + curr : ',' + curr);
  return converted.join('').split(',').map(e => e.replace(/_.*_/, '_')).join(',');
}

function toArray(str) {
  if (str.length === 0) return [];
  const res = [];
  const arr = str.split(',');
  console.log(arr);
  arr.forEach(e => {
    const temp = e.split('_');
    if (temp.length > 1) {
      for (let i = +(temp[0]); i <= +(temp[1]); i++) {
        res.push(i);
      }
    } else {
      res.push(Number(e));
    }
  });
  return res;
}
