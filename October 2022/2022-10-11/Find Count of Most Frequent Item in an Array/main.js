/*

Codewars, 7k: Find Count of Most Frequent Item in an Array

Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 
The most frequent number in the array is -1 and it occurs 5 times.

*/

const mostFrequentItemCount = arr => {
  if (!arr || arr.length === 0) return 0;
  let occurrence = arr.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    };
    return acc;
  }, {});
  return Object.values(occurrence).sort((a, b) => b - a)[0];
};

