/*

Codewars, 6k: How many pages in a book?

*/

function amountOfPages(summary) {
  let numStr = '';
  let counter = 0;

  while (numStr.length !== summary) {
    numStr += counter + 1;
    counter++;
  }

  return counter;
}

console.log(amountOfPages(25));