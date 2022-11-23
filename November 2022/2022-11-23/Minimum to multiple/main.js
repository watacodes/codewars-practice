/*

Codewars, 7k: Minimum to multiple

*/

const minimum = (n1, n2) => {
  let counter = 0;
  const mod = n1 % n2;
  while (counter < mod) {
    if ((n1 + counter) % n2 === 0) return counter;
    counter++;
  }
  return mod < counter ? mod : counter;
}