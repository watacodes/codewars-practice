/*

Codewars, 7k: Find twins

*/

const elimination = arr => {
  if (arr.length === [...new Set(arr)].length) return null;
  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(i+1).includes(arr[i])) {
      return arr[i];
    };
  };
};