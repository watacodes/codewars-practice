/*

Codewars, 8k: https://www.codewars.com/kata/559ac78160f0be07c200005a

Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"

*/

const nameShuffler = str => str.split(' ')
     .reverse()
     .join(' ');

console.log(nameShuffler('Ukyo Sugishita'));