/*

Codewars, 7k: The Baby Years III - First Tooth

*/

function firstTooth(t) {
  let diff = 0;
  let maxIdx = 0;
  let maxIdxCounter = 0;
  
  for (let i = 0; i < t.length; i++) {
    let currDiff = 0;
    if (i > 0) {
      currDiff += t[i] - t[i-1];
    }
    
    if (i < t.length - 1) {
      currDiff += t[i] - t[i+1];
    }
    
    if (currDiff === diff) {
      maxIdxCounter++;
    }
    
    if (currDiff > diff) {
      maxIdxCounter = 1;
      diff = currDiff;
      maxIdx = i;
    }
  }
  
  if (maxIdxCounter > 1) return -1;
  
  return maxIdx;
}