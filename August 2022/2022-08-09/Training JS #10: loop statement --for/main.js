/*

Codewars, 8k: Training JS #10: loop statement --for

Task
Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.

*/

const pickIt = arr => {
  let even = [];
  let odd = [];
  for (let i of arr) {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }
  return [odd, even];
};

console.log(pickIt([1,2,3,4,5,6,7]))