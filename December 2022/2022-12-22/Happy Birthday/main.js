/*

Codewars, 7k: Happy Birthday

*/



const wrap = (height, width, length) => {
  const double = Math.min(height, width, length);
  return height * 2 + width * 2 + length * 2 + double * 2 + 20;
}


//console.log(17 * 2 + 32 * 2 + 11 * 2 + 11 * 2 + 20)