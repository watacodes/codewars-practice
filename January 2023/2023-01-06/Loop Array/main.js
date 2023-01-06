/*

Codewars, 7k: Loop Array

*/

function loopArr(arr, direction, steps) {
  return direction === 'left' ? arr.slice(steps).concat(arr.slice(0, steps)) : arr.slice(steps * -1).concat(arr.slice(0, steps * -1));
}