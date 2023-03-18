/*

Codewars, 6k: Simple array rotation

*/

const solve = arr => {
  if (arr[1] > arr[0] && arr[1] < arr[2]) {
    return arr.some(e => e < arr[0]) ? 'RA' : 'A';
  }
  
  if (arr[1] < arr[0] && arr[1] > arr[2]) {
    return arr.some(e => e > arr[0]) ? 'RD' : 'D';
  }
  
  return arr[0] > arr.slice(-1)[0] ? 'RA' : 'RD';
}