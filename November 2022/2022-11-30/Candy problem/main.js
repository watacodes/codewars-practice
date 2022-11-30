/*

Codewars, 7k: Candy problem

*/

const candies = kids => {
  if (kids.length <= 1) return -1;

  const maxCandyCount = Math.max(...kids);
  let counter = 0;

  for (let kid of kids) {
    counter += maxCandyCount - kid;
  }

  return counter; 
}

console.log(candies([5,8,6,4]));