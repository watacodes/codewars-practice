/*

Codewars, 7k: Merge overlapping strings

*/

function mergeStrings(s1, s2){
  let counter = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[counter]) {
      counter++;
    } else {
      counter = 0;
      if (s1[i] === s2[counter]) {
        counter++;
      }
    }
  }

  return s1 + s2.slice(counter);
}

console.log(mergeStrings('aaabcd', 'abcdefgh'));