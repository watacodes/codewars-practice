/*

Codewars, 8k: No Loops 2 - You only need one

*** No Loops Allowed ***

You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.


*/

const check = (arr, val) => arr.some(a => a === val);

console.log(check([66, 101], 66));