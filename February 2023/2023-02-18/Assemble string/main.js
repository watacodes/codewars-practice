/*

Codewars, 6k: Assemble string

*/

function assembleString(arr) {
  if (arr.length === 0) return '';
  const regex = /[^*]/gi;
  const newArr = [];
  for (let i = 0; i < arr[0].length; i++) {
    const temp = [];
    for (let k = 0; k < arr.length; k++) {
      temp.push(arr[k][i]);
    }
    newArr.push(temp);
  }
  const res = [];
  for (let sub of newArr) {
    if (sub.every(e => e === '*')) {
      res.push('#');
    } else {
      res.push(sub.join('').match(regex)[0]);
    }
  }
  return res.join('');
}







const test1 = [
  "a*cde",
  "*bcde",
  "abc*e"
];

const test2 = [
  "a*c**",
  "**cd*",
  "a*cd*"
];

console.log(assembleString(test1))
console.log(assembleString(test2))
