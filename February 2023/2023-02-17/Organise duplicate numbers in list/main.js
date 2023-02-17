/*

Codewars, 6k: Organise duplicate numbers in list

*/

function group(arr) {
  const res = [];
  const uniqueVal = [...new Set(arr)];
  for (let i = 0; i < uniqueVal.length; i++) {
    let temp = arr.filter(e => e === uniqueVal[i]);
    res.push(temp);
  }
  return res;
}

const arr1 = [3, 2, 6, 2, 1, 3];
const arr2 = [3, 2, 6, 2];

console.log(group(arr1));