/*

Codewars, 7k: Absent vowel

Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

*/

const absentVowel = str => {
  const vowels = {
    a: 0,
    e: 1,
    i: 2,
    o: 3,
    u: 4
  };

  let strArray = str.toLowerCase().split('');
  
  for (let v in strArray) {
    let vowelKey = Object.keys(vowels);
    if (vowelKey.includes(strArray[v])) {
      vowels[strArray[v]] = true;
    }
  }
  return Object.values(vowels).filter(a => typeof a === 'number')[0];
};

console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"     ))