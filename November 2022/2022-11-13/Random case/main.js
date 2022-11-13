/*

Codewars, 7k: Random case

*/

const randomCase = str => {
  return [...str].map(a => Math.random() < .5 ? a.toUpperCase() : a.toLowerCase()).join('');
}