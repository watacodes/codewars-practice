/*

Codewars, 6k: Pyramid Array

*/


function pyramid(n) {
  const parent = [];
  for (let i = 0; i < n; i++) {
    parent.push([...Array(i+1)].fill(1));
  }
  return parent;
}