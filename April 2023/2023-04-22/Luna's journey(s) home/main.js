/*

Codewars, 6k: Luna's journey(s) home

*/

function run(distance, dog, human) {
  let counter = 0;
  
  while (distance >= 1) {
    distance *= (dog - human) / (dog + human);
    counter++;
  }
  
  return counter;
}