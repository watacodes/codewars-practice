/*

Codewars, 7k: Sum of Array Averages

*/

const sumAverage = arr => 
    Math.floor(arr.map(a => a.reduce((acc, curr) => acc + curr, 0) / a.length)
        .reduce((acc, curr) => acc + curr, 0));

console.log(sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]]))