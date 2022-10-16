/*

Codewars, 6k: Split Strings

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

const solution = str => {
  let strArray = str.split('');
  let arr = [];
  for (let i = 0; i < str.length; i += 2) {
    if (strArray[i+1]) {
      arr.push(strArray[i] + strArray[i+1]);
    } else {
      arr.push(strArray[i] + '_');
    }
  }
  return arr;
}

console.log(solution('abc'))