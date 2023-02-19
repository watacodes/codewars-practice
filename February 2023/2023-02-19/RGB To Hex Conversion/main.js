/*

Codewars, 5k: RGB To Hex Conversion

*/

function rgb(r, g, b){
  if (r > 255) r = 255;
  if (g > 255) g = 255;
  if (b > 255) b = 255;
  const newR = +r.toString(16) <= 0 ? '00' : +r.toString(16) < 10 || r < 16 ? `0${r.toString(16).toUpperCase()}` : r.toString(16).toUpperCase();
  const newG = +g.toString(16) <= 0 ? '00' : +g.toString(16) < 10 || g < 16 ? `0${g.toString(16).toUpperCase()}` : g.toString(16).toUpperCase();
  const newB = +b.toString(16) <= 0 ? '00' : +b.toString(16) < 10 || b < 16 ? `0${b.toString(16).toUpperCase()}` : b.toString(16).toUpperCase();
  return newR + newG + newB;
}