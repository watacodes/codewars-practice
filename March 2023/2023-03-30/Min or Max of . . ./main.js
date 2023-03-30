/*

Codewars, 6k: Min or Max of . . .

*/

function max(xx){
  return [...xx].reduce((a,b) => a > b ? a : b) 
}

function min(xx){
  return [...xx].reduce((a,b) => a < b ? a : b) 
}