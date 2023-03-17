/*

Codewars, 7k: Leonardo numbers

*/

const L = (n , L0 , L1 , add) => {
  const res = [L0, L1];
  
  for (let i = 2; i < n; i++) {
    res.push(res[i - 2] + res[i - 1] + add);
  }
  
  return res;
}