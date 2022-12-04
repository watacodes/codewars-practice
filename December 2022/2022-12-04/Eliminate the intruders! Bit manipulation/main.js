/*

Codewars, 7k: Eliminate the intruders! Bit manipulation

*/

const eliminateUnsetBits = num => {
  const deleteUnsetBits = num.replace(/0/g, '');
  return parseInt(deleteUnsetBits, 2) || 0;
}


console.log(eliminateUnsetBits("11010101010101"))