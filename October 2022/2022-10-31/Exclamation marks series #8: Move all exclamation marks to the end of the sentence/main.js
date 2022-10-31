/*

Codewars, 7k: Exclamation marks series #8: Move all exclamation marks to the end of the sentence

Description:
Move all exclamation marks to the end of the sentence

Examples
remove("Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!!"
remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"

*/

const remove = str => {
  if (!str.match(/!/g)) return str;
  let bangCounter = str.match(/!/g).length;
  return str.replace(/!/g, '') + '!'.repeat(bangCounter);
};


console.log('hoi!!'.match(/!/g).length);