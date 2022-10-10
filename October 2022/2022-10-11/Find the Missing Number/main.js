/*

Codewars, 7k: Find the Missing Number

The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

*/

const missingNo = num => {
  let sortedArray = num.sort((a, b) => a - b);
  for (let i of sortedArray) {
    if (!sortedArray.includes(0)) return 0;
    if (!sortedArray.includes(i+1)) return i+1;
  }
};

