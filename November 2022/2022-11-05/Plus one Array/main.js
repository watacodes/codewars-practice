/*

Codewars, 6k: Plus one Array

Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]

*/

const upArray = arr => {
  if (arr.some(a => a < 0 || a > 9) || !arr || arr.length === 0) return null;
  arr.push(arr.pop() + 1)
  let reversedArr = arr.reverse();
  let digitsMoved = reversedArr.map((a, i) => {
    if (a > 9) {
      a = 0;
      reversedArr[i+1]++;
    };
    return a;
  });
  
  if (digitsMoved.every(a => a === 0)) {
    digitsMoved.unshift(1);
    return digitsMoved;
  }

  return digitsMoved.reverse();
};

console.log(upArray([9,9]));
