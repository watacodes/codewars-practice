/*

Codewars, 8k: ASCII Total

You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291

*/

const uniTotal = s => {
  let sArr = [...s];
  let accm = 0;
  if (sArr.length !== 0) {
    for (let i of sArr) {
      accm += i.charCodeAt();
    }
    return accm;
  }
  return 0;
}
console.log(uniTotal('abc'));