/*

Codewars, 7k: Highest Rank Number in an Array

Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

*/

const highestRank = arr => {
  console.log(arr);
  const occurrence = arr.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    };
    return acc;
  }, {});
  
  const res = [];
  const max = Math.max(...Object.values(occurrence));
  for (let i of Object.keys(occurrence)) {
    if (occurrence[i] === max) {
      res.push(i);
    };
  };
  return +res.sort((a, b) => b - a)[0]
};



console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]))