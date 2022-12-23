/*

Codewars, 7k: Concatenated Sum

*/

const checkConcatenatedSum = (int, digit) => {
  const generatedNums = [];
  let intNum = int.toString();
  for (let i = 0; i < intNum.length; i++) {
    if (intNum[i] === '-') {
      continue;
    } else {
      generatedNums.push(intNum[i].repeat(digit));    
    }
  }
  return int < 0 
    ? 
    generatedNums.reduce((acc, curr) => acc - +curr, 0) === int
    :
    generatedNums.reduce((acc, curr) => acc + +curr, 0) === int;
}
