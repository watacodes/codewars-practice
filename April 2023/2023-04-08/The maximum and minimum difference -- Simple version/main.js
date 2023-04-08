/*

Codewars, 6k: The maximum and minimum difference -- Simple version

*/

function maxAndMin(arr1, arr2) {
  const res = [];
  
  arr1.forEach(e => {
    for (let i = 0; i < arr2.length; i++) {
      res.push(Math.abs(e - arr2[i]));
    }
  });
  
  return [Math.max(...res), Math.min(...res)];
};