/*

Codewars, 7k: Sort the Vowels!

Task
Write a function which takes a input string s and return a string in the following way:

   
                  C|                          R|
                  |O                          n|
                  D|                          d|
   "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|

*/

const sortVowels = s => {
  let strArr = s.split('');
  let res = '';
  strArr.forEach(w => w.match(/[aiueo]/gi) ? res += `|${w}\n` : res += `${w}|\n`);
  return res.trim();
};

console.log(sortVowels('HRITDLIEITTTJIN'));