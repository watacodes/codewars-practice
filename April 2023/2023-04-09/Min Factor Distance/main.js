/*

Codewars, 6k: Min Factor Distance

*/

const genFactors = (n, res = []) => {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) res.push(i);
  }
  return res;
}


function minDistance(n) {
  let curr = Infinity;
  
  const arr = genFactors(n);
  
  for (let i = 0; i < arr.length - 1; i++) {
    const [n1, n2] = [arr[i], arr[i+1]];
    if (n2 - n1 < curr) {
      curr = n2 - n1;
    }
  }
  
  return curr;
}