/*

Codewars, 6k: Weight lifting calculator

*/

function liftingCalc(w) {
  if (w < 20) return false;
  if (w === 20) return [];
  const res = [];
  w -= 20;
  w /= 2;
  while (w - 20 >= 0) {
    res.push(20);
    w -= 20;
  }
  
  if (w - 15 >= 0) {
    res.push(15);
    w -= 15;
  }
  
  if (w - 10 >= 0) {
    res.push(10);
    w -= 10;
  }
  
  if (w - 5 >= 0) {
    res.push(5);
    w -= 5;
  }
  
  if (w - 2.5 >= 0) {
    res.push(2.5);
    w -= 2.5;
  }
  
  while (w - 1.25 >= 0) {
    res.push(1.25);
    w -= 1.25;
  }
  
  return w !== 0 ? false : res;
}
