/*

Codewars, 7k: Ghostbusters (whitespace removal)

*/

const ghostBusters = str => str.replace(/\s/g, '').length === str.length ? 'You just wanted my autograph didn\'t you?' : str.replace(/\s/g, '');

console.log(ghostBusters('BusStation'));