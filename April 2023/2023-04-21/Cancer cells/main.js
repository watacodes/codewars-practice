/*

Codewars, 6k: Cancer cells

*/

function cutCancerCells(organism) {
  return organism.replace(/[a-z]?[C][a-z]?|[c]/g, '');
};