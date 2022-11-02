/*

Codewars, 7k: The Pony Express

Kata Task
stations is a list/array of distances (miles) from one station to the next along the Pony Express route.

Implement the riders method/function, to return how many riders are necessary to get the mail from one end to the other.

NOTE: Each rider travels as far as he can, but never more than 100 miles.


*/

const riders = stations => {
  let counter = 1;
  let distance = 0;
  for (const i of stations) {
    if (distance + i > 100) {
      counter++;
      distance = i;
    } else {
      distance += i;
    }
  }
  return counter;
}; 

console.log(riders([33, 8, 16, 47, 30, 30, 46]))