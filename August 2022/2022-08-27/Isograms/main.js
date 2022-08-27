/*

Codewars, 7k: Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/

const isIsogram = s => {
  let letterCount = s.toLowerCase().split('').reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1
    } else {
      acc[curr]++
    }
    return acc;
  }, {})
  for (let letter in letterCount) {
    if (letterCount[letter] > 1) return false;
  }
  return true;
};

console.log(isIsogram("Dermatoglyphics"));