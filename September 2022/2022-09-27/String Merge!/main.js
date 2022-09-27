/*

Codewars, 7k: String Merge!

Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.

Examples
("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"


*/

  const stringMerge = (s1, s2, s3) => {
    s1 = s1.split(s3);
    s2 = s2.slice(s2.split('').indexOf(s3));
    console.log(s1, s2)
    return s1[0] + s2;
  };

console.log(stringMerge("person","here", "e"))