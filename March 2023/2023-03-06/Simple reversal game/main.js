/*

Codewars, 7k: Simple reversal game

*/


function solve(n, k) {
  let arr = [];
  
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }

  let max = arr.length - 1;
  let counter = 0;
  
  while (counter < max) {
    if (counter === 0) {
      arr = arr.reverse();
    } else {
      arr = arr.slice(0, counter).concat(arr.slice(counter).reverse());
    }
    counter++;
  }
  
  return arr.indexOf(k);
}



console.log(solve(4, 1));