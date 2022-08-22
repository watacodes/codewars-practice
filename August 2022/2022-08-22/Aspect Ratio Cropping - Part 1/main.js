/*

Codewars, 8k: Aspect Ratio Cropping - Part 1


*/

function aspectRatio(x,y) {
  return [Math.ceil(y * (16 / 9)), y];
}