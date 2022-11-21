/*

Codewars, 7k: The Span Function

*/

const span = (arr, predicate) => {
  let count = 0;
  while (count < arr.length && predicate(arr[count])) {
    count++;
  }
  return [arr.slice(0, count), arr.slice(count)];
}