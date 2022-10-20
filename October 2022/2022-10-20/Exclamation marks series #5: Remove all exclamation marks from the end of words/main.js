/*

Codewars, 7k: Exclamation marks series #5: Remove all exclamation marks from the end of words

ask
Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi Hi"
remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi"

*/

const remove = str => {
  let strArray = str.split(' ');
  return strArray.map(el => el.replace(/!+$/, '')).join(' ');
}

console.log(remove("!!Hi!!!!"))