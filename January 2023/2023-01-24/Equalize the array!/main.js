/*

Codewars, 7k: Equalize the array!

*/

function equalize(array) {
  return array.map((e, i) => e - array[0] >= 0 ? `+${e - array[0]}` : `${e - array[0]}`);
}