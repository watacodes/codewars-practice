/*

Codewars, 6k: Convert string to camel case

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/

const toCamelCase = str => {
  let regex = /[-_]/g;
  let noDashes = str.split(regex);
  return noDashes[0] + noDashes.slice(1).map(a => a[0].toUpperCase() + a.slice(1)).join('');
};

console.log(toCamelCase("The_stealth_warrior"))