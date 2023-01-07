/*

Codewars, 7k: How many urinals are free?

*/

function getFreeUrinals(urinals) {
  if (urinals.includes('11')) return -1;
  let counter = 0;
  let arr = [...urinals];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i-1] === '0' || arr[i-1] == undefined) 
        && arr[i] === '0' && (arr[i+1] === '0' || arr[i+1] == undefined)) {
      arr[i] = '1';
      counter++;
    }
  }
  return counter;
}