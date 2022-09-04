/*

Codewars, 7k: Find the vowels

We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]

NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)

*/

const vowelIndices = w => {
  let vowels = /[aeiuoy]+/i;
  return w.split('').map((a, i) => vowels.test(a) ? i + 1 : a).filter(a => typeof a === 'number');
};

console.log(vowelIndices('supercalifragilisticexpialidocious'))