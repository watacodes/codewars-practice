/*

Codewars, 7k: Numbers to Letters


Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.



*/

const switcher = n => {
  return n.map(a => {
    if (a == 27) return '!'
    if (a == 28) return '?'
    if (a == 29) return ' '
    return String.fromCharCode(97 + 26 - Number(a));
  }).join('');
}
console.log(switcher(['4', '24']))