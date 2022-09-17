/*

Codewars, 7k: Ordered Count of Characters

Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

*/

const orderedCount = str => {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < res.length; j++) {
      if (res[j][0] === str[i]) {
        count++;
      }
    }
    if (count === 0) {
      for (let j = i; j < str.length; j++) {
        if (str[j] === str[i]) {
          count++;
        }
      }
      res.push([str[i], count]);
    }
  }
  return res;
};

console.log(orderedCount("233312"))