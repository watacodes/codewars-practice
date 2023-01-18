/*

Codewars, 7k: An English Twist on a Japanese Classic

*/

function shiritori(words) {
  if (words[0] === undefined || words[0] === '') return [];
  const mapped = [words[0]];
  for (let i = 1; i < words.length; i++) {
    if (!words[i] || words[i - 1].slice(-1) !== words[i].charAt(0)) {
      return mapped;
    } else {
      mapped.push(words[i]);
    }
  }
  return mapped;
}