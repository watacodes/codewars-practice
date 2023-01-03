/*

Codewars, 7k: Right in the Centre

*/

const isInMiddle = seq => {
  const middle = Math.floor(seq.length / 2) - 1;
  if (seq.length % 2 === 0) {
    return seq.slice(middle, middle + 3) === 'abc' ||
           seq.slice(middle - 1, middle + 2) === 'abc';
  } else {
    return seq.slice(middle, middle + 3) === 'abc';
  }
}