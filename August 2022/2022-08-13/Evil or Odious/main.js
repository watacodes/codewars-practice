/*

Codewars, 8k: Evil or Odious

The number n is Evil if it has an even number of 1's in its binary representation.
The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

The number n is Odious if it has an odd number of 1's in its binary representation.
The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.


*/

// convert n to binary, count how many 1's in the binary representation,
// if it's even, return evil, else return odious.

// 3 -> 11, 5 -> 101, 6-> 110 

const evil = n => {
  let toBinary = n.toString(2);
  let counter = 0;
  for (let i = 0; i < toBinary.length; i++) {
    if (toBinary[i] == 1) counter++
  }
  return counter % 2 === 0 ? "It's Evil!" : "It's Odious!";
}

console.log(evil(2));