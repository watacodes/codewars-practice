/*

Codewars, 6k: Find the Location for the Wildlife Study

*/

function findTheLocation(str) {
  const res = str.match(/([A-Z]{1}[a-z]+ ?)+ (Park|Preserve|Reserve|Reservation|Recreation Area)\b/g)[0].replace(/(At|The|In) /, '');
  return res;
}