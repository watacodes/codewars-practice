/*

Codewars, 7k: Rock Off!

*/

const solve = (a, b) => {
  let aScore = 0;
  let bScore = 0;

  a.forEach((a, i) => a === b[i] ? aScore + 0 : a < b[i] ? bScore++ : aScore++);

  return aScore === bScore 
          ? `${aScore}, ${bScore}: that looks like a "draw"! Rock on!`
          : aScore > bScore 
          ? `${aScore}, ${bScore}: Alice made "Kurt" proud!`
          : `${aScore}, ${bScore}: Bob made "Jeff" proud!`
} 