/*

Codewars, 8k: Regex count lowercase letters

Your task is simply to count the total number of lowercase letters in a string.

Examples
lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26

*/

const lowercaseCount = s => {
  let counter = 0;
  let regex = /[a-z]/g
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i).match(regex)) counter++;
  }
  return counter;
};

console.log(lowercaseCount('absceRR'));