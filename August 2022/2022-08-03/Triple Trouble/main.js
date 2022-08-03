/*

Codewars, 8k: https://www.codewars.com/kata/5704aea738428f4d30000914

Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.

*/

const tripleTrouble = (w1, w2, w3) => {
  let w1Arr = w1.split('')
  let w2Arr = w2.split('')
  let w3Arr = w3.split('')
  let emptyArr = [];
  for (let i = 0; i < w1.length; i++) {
    emptyArr.push(w1Arr[i]);
    emptyArr.push(w2Arr[i]);
    emptyArr.push(w3Arr[i]);
  }
  return emptyArr.join('');
};

console.log(tripleTrouble("Sea","urn","pms"));