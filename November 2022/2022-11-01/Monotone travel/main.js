/*

Codewars, 7k: Monotone travel


*/

const isMonotone = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i+1]) return false;
  };
  return true;
};