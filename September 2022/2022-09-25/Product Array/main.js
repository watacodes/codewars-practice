/*

Codewars, 7k: 

Task
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].


*/

// Iterate the original array, sum all the numbers
// except for the number which matches the index in the array.

const productArray = n => {
  let arr = []
  let copy = n.slice();
  for (let i = 0; i < n.length; i++) {
    copy.splice(i, 1);
    arr.push(copy.reduce((a, b) => a * b, 1));
    console.log(copy, arr)
    copy = n.slice();
    console.log(copy)
  }
  return arr;
};

console.log(productArray([3,27,4,2]));