/*

Codewars, 7k: noobCode 03: CHECK THESE LETTERS... see if letters in "String 2" are present in "String 1"

*/


const letterCheck = arr => {
  const firstStr = arr[0].toLowerCase();
  const secondStr = arr[1].toLowerCase();
  return [...secondStr].every(w => firstStr.includes(w));
}


const testCase = ["compadres", "DRAPES"];

console.log(letterCheck(testCase));