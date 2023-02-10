/*

Codewars, 7k: Set Reducer

*/

function setReducer(input) {
  const reduced = [];
  for (let i = 0, counter = 1; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      counter++;
    } else {
      reduced.push(counter);
      counter = 1;
    }
  } 
  return reduced.length === 1 ? reduced[0] : setReducer(reduced);
}