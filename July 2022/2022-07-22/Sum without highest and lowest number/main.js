/* 

Codewars challenge, 8k: https://www.codewars.com/kata/576b93db1129fcf2200001e6

Task
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

*/

const sumArray = (array) => {
    // 1. If array.length <= 1, return 0 (Input validation);
    // 2. Sort the array. ---> array.sort() from the lowest to the highest,
    // 3. After sorting the given array, filter out the first and last value of the array. ---> newAarray.pop() && .shift()
    // 4. Use the new array, sum all numbers in it. ---> let result = 0, newArray.map(a => result += a)
    
    if (array == null || array.length <= 1) return 0;
    let sortedArray = array.sort((a,b) => a - b);
    sortedArray.shift();
    sortedArray.pop();
    let result = 0;
    sortedArray.map(a => result += a)
    return result;
}

console.log(sumArray([6, 2, 1, 8, 10]));

