/*

Codewars, 7k: Arithmetic List!

*/

const seqlist = (first, c ,l) => {
  const res = [first];
  let counter = 0;
  while (counter < l - 1) {
    first += c
    res.push(first);
    counter++;
  }
  return res;
}