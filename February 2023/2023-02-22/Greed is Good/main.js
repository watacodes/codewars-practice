/*

Codewars, 5k: Greed is Good

*/

function score(points) {
  const scoreCounter = Array(6).fill(0);

  points.forEach((e, i) => {
    if (e === 6) scoreCounter[scoreCounter.length - 1]++;
    if (e === 5) scoreCounter[scoreCounter.length - 2]++;
    if (e === 4) scoreCounter[scoreCounter.length - 3]++;
    if (e === 3) scoreCounter[2]++;
    if (e === 2) scoreCounter[1]++;
    if (e === 1) scoreCounter[0]++;
  })

  let res = 0;
  if (scoreCounter[0] > 2) {
    res += 1000;
    scoreCounter[0] -= 3;
  }
  if (scoreCounter[5] > 2) {
    res += 600;
  }
  if (scoreCounter[4] > 2) {
    res += 500;
    scoreCounter[4] -= 3;
  }
  if (scoreCounter[3] > 2) {
    res += 400;
  }
  if (scoreCounter[2] > 2) {
    res += 300;    
  }
  if (scoreCounter[1] > 2) {
    res += 200;
  }
  res += scoreCounter[0] * 100;
  res += scoreCounter[4] * 50;
  return res;
}







console.log( score( [2, 3, 4, 6, 2] )); // 0
console.log( score( [4, 4, 4, 3, 3] )) // 400\
console.log( score( [2, 4, 4, 5, 4] )) // 450
