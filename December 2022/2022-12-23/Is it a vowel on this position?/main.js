/*

Codewars, 7k: Is it a vowel on this position?

*/

const checkVowel = (str, idx) => /[aiueo]/i.test(str[idx] || '');