/*

Codewars, 7k: Regex Failure - Bug Fixing #2

*/

const filterWords = phrase => {
  return phrase.replace(/(bad)|(mean)|(ugly)|(horrible)|(hideous)/gi, 'awesome');
}