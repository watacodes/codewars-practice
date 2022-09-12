/*

Codewars, 7k: Ordered Count of Characters

DESCRIPTION:
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

*/

const orderedCount = str => {
  let emptyArr = [];
  for (let i = 0; i < str.length; i++) {
    console.log(emptyArr.includes([str[i]]))
    if(!emptyArr.includes([`${str[i]}`])) {
      emptyArr.push([str[i]]);
    }
  }
  console.log(emptyArr)
};

console.log(orderedCount('abracadabra'))