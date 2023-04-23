/*

Codewars, 6k: Let's Recycle!

*/


function recycle(array) {
  const res = {
    paper: [], 
    glass: [],
    organic: [], 
    plastic: [],
  };
  
  for (const item of array) {
    if (item.secondMaterial) {
      res[item.secondMaterial].push(item.type);
    }
    res[item.material].push(item.type);
  }
  
  return Object.values(res);
}