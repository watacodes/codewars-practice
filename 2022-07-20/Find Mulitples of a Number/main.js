/* 

Codewars Question, 8k, 2022/7/21

In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.

*/


function findMultiples(integer, limit) {
    // If limit % integer is less than integer
    // Perform this
    // Before that, prepare an empty array
    // If limit % integer === 0 
    // for (let i = integer; i < limit // integer; i += integer) {
    //   emptyArray.push(i)
    // }
    // return the empty array.
    const emptyArray = [];
    let defValue = 0;
    for (let i = 1; i <= Math.floor(limit / integer); i++) {
      defValue = integer * i;
      emptyArray.push(defValue);
    }
    return emptyArray;
  }