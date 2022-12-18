/*

Codewars, 7k: String reverse slicing 101

*/

const reverseSlice = str => {
  let reversedStr = [...str].reverse().join('');
  const res = [];
  for (let i = 0; i < str.length; i++) {
    res.push(reversedStr.slice(i));
  }
  return res;
}