/*

Codewars, 6k: Matrix Addition

*/

function matrixAddition(a, b){
  const res = [];
  for (let outer = 0; outer < a.length; outer++) {
    const child = [];
    for (let inner = 0; inner < a[0].length; inner++) {
      const sum = a[outer][inner] + b[outer][inner];
      child.push(sum);
    }
    res.push(child);
  }
  return res;
}