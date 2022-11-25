/*

Codewars, 7k: Shared Bit Counter


 7  =  0111 in binary
10  =  1010
15  =  1111
7 and 10 share only a single 1-bit (at index 2) --> false
7 and 15 share 3 1-bits (at indexes 1, 2, and 3) --> true
10 and 15 share 2 1-bits (at indexes 0 and 2) --> true

*/

const sharedBits = (a, b) => {
  const bitsA = a.toString(2).length < b.toString(2).length ? '0'.repeat(b.toString(2).length - a.toString(2).length) + a.toString(2) : a.toString(2);
  const bitsB = b.toString(2).length < a.toString(2).length ? '0'.repeat(a.toString(2).length - b.toString(2).length) + b.toString(2) : b.toString(2);
  let counter = 0;

  console.log(bitsA, bitsB);

  for (let i = 0; i < bitsA.length; i++) {
    if (bitsA[i] == 1 && bitsB[i] == 1) {
      counter++;
    }
  }
  return counter >= 2;
}

console.log(sharedBits(7, 10))
console.log(sharedBits(10, 15));