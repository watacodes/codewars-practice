/*

Codewars, 6k: Bad Apples

*/

function badApples(input) {
  const isRotten = arr => arr[0] === 0 && arr[1] === 0;
  const isBadPackage = arr => arr[0] === 0 || arr[1] === 0;
  
  let filtered = input.filter(e => !isRotten(e));
 
  let status = null;
  
  filtered.forEach((e, i) => {
    if (!isBadPackage(e)) return;
    
    if (filtered[i][1] > 0) {
      e.reverse();
    }
    
    if (status) {
      status[1] = e[0];
      status = null;
    } else {
      status = e;
    }
  });
  
  const swap = filtered.filter(e => !isBadPackage(e));
  return swap;
}