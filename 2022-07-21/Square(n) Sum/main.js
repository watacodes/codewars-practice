/*

Codewars challenge, 8k: https://www.codewars.com/kata/515e271a311df0350d00000f


Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


*/

function squareSum(numbers){
    let result = 0;
    numbers.map(x => result += x * x); 
    return result;
}
console.log(squareSum([0, 3, 4, 5]));