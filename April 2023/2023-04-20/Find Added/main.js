/*

Codewars, 6k: Find Added

*/

function findAdded(s1, s2) {
  
  for (let i = 0; i < s1.length; i++) {
    s2 = s2.replace(s1[i], '');
  }
  
  return [...s2].sort().join('');
};