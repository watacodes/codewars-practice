/*

Codewars, 7k: Split By Value

For k = 6 and elements = [6, 4, 10, 10, 6], the output should be splitByValue(k, elements) = [4, 6, 10, 10, 6].

For k = 5 and elements = [1, 3, 5, 7, 6, 4, 2], the output should be splitByValue(k, elements) = [1, 3, 4, 2, 5, 7, 6].

*/

const splitByValue = (k, arr) => {
  const greaterThanK = [];
  const lessThanK = arr.filter((num, i) => {
    if (num >= k) {
      greaterThanK.push(num);
    } else {
      return num;
    }
  });
  return lessThanK.concat(greaterThanK);
}

console.log(splitByValue(5, [1,3,5,7,6,4,2]));