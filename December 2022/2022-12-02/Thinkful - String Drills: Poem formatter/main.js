/*

Codewars, 7k: Thinkful - String Drills: Poem formatter

*/

const formatPoem = poem => {
  return poem.split('. ').join('.\n').trim();
}


const testPoem = 'Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated.';

console.log(formatPoem(testPoem))