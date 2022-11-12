/*

Codewars, 7k: Single digit


*/

// Input: base 10 integer
//        -> return if it's a single digit integer
//        -> if not, convert the integer to binary
//        -> sum the binary
//        -> sum of the binary >= 10 ? call the func again : return the sum

const singleDigit = n => {
  if (n < 10) return n;
  const nToBinary = n.toString(2);
  const sumOfBinary = nToBinary.match(/[1]/g).length;
  console.log(nToBinary);
  return sumOfBinary < 10 ? sumOfBinary : singleDigit(sumOfBinary);
};

console.log(singleDigit(999))