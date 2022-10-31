/*

Codewars, 7k: Sort Santa's Reindeer

Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.

[
  "Dasher Tonoyan", 
  "Dancer Moore", 
  "Prancer Chua", 
  "Vixen Hall", 
  "Comet Karavani",        
  "Cupid Foroutan", 
  "Donder Jonker", 
  "Blitzen Claus"
]

*/

const sortReindeer = arr => arr.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1]));

console.log(sortReindeer([
  "Dasher Tonoyan", 
  "Dancer Moore", 
  "Prancer Chua", 
  "Vixen Hall", 
  "Comet Karavani",        
  "Cupid Foroutan", 
  "Donder Jonker", 
  "Blitzen Claus"
]));