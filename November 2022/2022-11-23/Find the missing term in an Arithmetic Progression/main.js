/*

Codewars, 7k: Find the missing term in an Arithmetic Progression


test 

findMissing([1, 3, 5, 9, 11]) == 7

*/

const findMissing = arr => {
  const diff1 = arr[1] - arr[0];
  const diff2 = arr[arr.length - 1] - arr[arr.length - 2];
  if (diff1 !== diff2) {
    if (diff1 === diff2 * 2) {
      return arr[0] + diff2; 
    } else {
      return arr[arr.length - 1] - diff1;
    }
  }

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i + 1] - arr[i] !== diff1) {
      return arr[i] + diff1;
    }
  }
  return arr[0];
}

console.log(findMissing([1, 3, 5, 9, 11]))