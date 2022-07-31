/*

Codewars challenge, 8k: https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

*/

// First quater = month 1, 2, 3
// Second quater = month 4, 5, 6
// Third quater = month 7, 8, 9
// Fourth quater = month 10, 11, 12

const quarterOf = month => {
    if (month < 4) return 1;
    if (month < 7) return 2;
    if (month < 10) return 3;
    if (month < 13) return 4;
}

console.log(quarterOf(3));