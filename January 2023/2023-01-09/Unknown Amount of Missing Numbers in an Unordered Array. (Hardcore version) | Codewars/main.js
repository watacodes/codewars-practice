/*

Codewars, 6k: Unknown Amount of Missing Numbers in an Unordered Array. (Hardcore version) | Codewars

*/

function missNumsFinder(arr) {
  const allNums = [];
  const missingNums = [];
  const maxNum = Math.max(...arr);
  for (let i = 1; i <= maxNum; i++) {
    allNums.push(i);
  }
  allNums.forEach(e => !arr.includes(e) ? missingNums.push(e) : e);
  return missingNums;
}