/* 

Codewars challenge, Reverse List Order, 8k: https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b

In this kata you will create a function that takes in a list and returns a list with the reverse order.

Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]

*/

const reverseList = list => {
    let returnArr = [];
    for (let i = list.length - 1; i >= 0; i--) {
      returnArr.push(list[i]);
    }
    return returnArr;
}