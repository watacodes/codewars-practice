/*

Codewars, 6k: Replace Noun Phrases with Pronouns

*/

function replaceNounPhrases(sentence, pronouns, dictionary) {
  const N = Object.entries(dictionary).filter(e => e[1] === "N").map(e => e[0]).join("|");
  const adj = Object.entries(dictionary).filter(e => e[1] === "adj").map(e => e[0]).join("|");
  const aux = Object.entries(dictionary).filter(e => e[1] === "aux").map(e => e[0]).join("|");

  const re = new RegExp(`(${aux}) ((${adj}) )*(${N})`,"gi");
  
  return sentence.replace(re, match => pronouns.shift());
}