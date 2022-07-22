/* 

Codewars question, 8k: https://www.codewars.com/kata/576bb71bbbcf0951d5000044/javascript

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

*/
const countPositivesSumNegatives = input => {
    // 1. If input == null || input.length < 1, return [];
    // 1.1 We have to return an ARRAY, which cointains two elements.
    // 1.2 First element represents the count of POSITIVE numbers.
    // 1.3 Second element represents the sum of NEGATIVE numbers.
    // 2. Sort an array, create two arrays and one var.
    // 2.1 if element > 0, firstArr.push(element),
    // 2.2 if element < 0, var += element
    // 3 return secondArr[firstArr.length, var];

    if (input == null || input.length < 1) return [];
    let firstArr = [];
    let secondArr = [];
    let sumOfNegativeNums = 0;
    for (let i in input) {
        let num = input[i];
        num > 0 ? firstArr.push(num) : sumOfNegativeNums += num;
    }
    return secondArr = [firstArr.length, sumOfNegativeNums];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));