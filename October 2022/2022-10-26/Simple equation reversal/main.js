/*

Codewars, 7k: Simple equation reversal

Given a mathematical equation that has *,+,-,/, reverse it as follows:

solve("100*b/y") = "y/b*100"
solve("a+b-c/d*30") = "30*d/c-b+a"

*/

const solve = str => str.split(/([+-/*])/).reverse().join('');

console.log(solve("100*b/y"))