/*

Codewars, 7k: Arithmetic sequence - sum of n elements

In your class, you have started lessons about "arithmetic progression". Because you are also a programmer, you have decided to write a function.

This function, arithmetic_sequence_sum(a, r, n), should return the sum of the first (n) elements of a sequence in which each element is the sum of the given integer (a), and a number of occurences of the given integer (r), based on the element's position within the sequence.

For example:

arithmetic_sequence_sum(2, 3, 5) should return 40:

1     2        3          4            5
a + (a+r) + (a+r+r) + (a+r+r+r) + (a+r+r+r+r) 
2 + (2+3) + (2+3+3) + (2+3+3+3) + (2+3+3+3+3) = 40

*/

// formula ->  a * n + r * !(n - 1)

const ArithmeticSequenceSum = (a, r, n) => {
  let result = a * n;
  let counter = n - 1;
  let rTimes = 0;
  while (counter > 0) {
    rTimes += counter;
    counter--;
  }
  return result + rTimes * r;
};

console.log(ArithmeticSequenceSum(2, 3, 5))