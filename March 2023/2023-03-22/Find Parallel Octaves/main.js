/*

Codewars, 7k: Find Parallel Octaves

*/

function passOrFail(harmony) {
  const notes = ['do', 're', 'mi', 'fa', 'sol', 'la', 'ti'];
  
  const arr = harmony.map(e => e.split(' '));
  
  for (let i = 0; i < harmony.length - 1; i++) {
    for (let k = 0; k < harmony.length - 1; k++) {
      for (let p = k + 1; p < harmony.length; p++) {
        if (arr[i+1][k] === arr[i+1][p] && 
            arr[i][k] === arr[i][p] && 
            arr[i][k] !== arr[i+1][p]) return 'Fail';
      }
    }
  }
  
  return 'Pass';
};