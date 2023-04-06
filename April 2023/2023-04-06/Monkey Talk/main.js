/*

Codewars, 6k: Monkey Talk

*/

function monkeyTalk(phrase) {
  console.log(phrase);
  const vowels = 'aiueo';
  return phrase.toLowerCase()
               .replace(/\w+/g, (e) => vowels.includes(e[0]) ? 'eek' : 'ook')
               .replace(/^./g, (e) => e.toUpperCase()) + '.';
};