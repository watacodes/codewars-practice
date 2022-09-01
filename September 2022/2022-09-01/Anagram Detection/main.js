/*

Codewars, 7k: Anagram Detection

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples

"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

*/

const isAnagram = (test, original) => {
  let testArr = test.toLowerCase().split('').sort().join();
  let originalArr = original.toLowerCase().split('').sort().join();
  return testArr === originalArr;
};


console.log(isAnagram('foefet', 'toffee'));

