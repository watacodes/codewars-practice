/*

Codewars, 8k: UEFA EURO 2016


Finish the uefaEuro2016() function so it return string just like in the examples below:

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

*/

const uefaEuro2016 = (m, r) => {
  if (r[0] === r[1]) return `At match ${m[0]} - ${m[1]}, teams played draw.`;
  if (r[0] > r[1]) return `At match ${m[0]} - ${m[1]}, ${m[0]} won!`;
  return `At match ${m[0]} - ${m[1]}, ${m[1]} won!`;
}