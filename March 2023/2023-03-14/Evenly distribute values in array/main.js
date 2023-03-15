/*

Codewars, 7k: Evenly distribute values in array

*/

const distributeEvenly = arr => {
  const unique = [...new Set(arr)];
  const res = [];

  for (let k = arr.length; k > 0; k--) {
    for (let i = 0; i < unique.length; i++) {
      if (arr.includes(unique[i])) {
        const idx = arr.indexOf(unique[i]);
        arr.splice(idx, 1);
        res.push(unique[i]);
      }
    }    
  }
  
  return res;
};