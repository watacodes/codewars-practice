/*

Codewars, 6k: Array Product (Sans n)

*/

function productSansN(n) {

  const res = [];
  
  for (let i = 0; i < n.length; i++) {
    const temp = n.filter((num, idx) => idx !== i);
    res.push(temp.reduce((acc, curr) => acc * BigInt(curr), 1n).toString());
  }
  
  return res;
}