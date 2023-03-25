/*

Codewars, 7k: The Baby Years I - Baby Counting

*/

function babyCount(x) {
  let res = [0, 0, 0];
  
  [...x.toLowerCase()].forEach(letter => {
    if (letter === 'a') {
      res[0]++;
    } else if (letter === 'b') {
      res[1]++;
    } else if (letter === 'y') {
      res[2]++;
    }
  });
  
  res[1] = Math.floor(res[1] / 2);
  res = res.sort((a, b) => a - b);
  return res[0] === 0 ? `Where's the baby?!` : res[0];
};