/*

Codewars, 8k: https://www.codewars.com/kata/555086d53eac039a2a000083

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

*/


const lovefunc = (flower1, flower2) => (flower1 % 2 === flower2 % 2) ? false : true;

console.log(lovefunc(5, 5));
console.log(lovefunc(2, 4));
console.log(lovefunc(1, 4));