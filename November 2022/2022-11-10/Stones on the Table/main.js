/*

Codewars, 7k: Stones on the Table


*/

const solve = stones => {
  const stonesArr = [...stones];
  let counter = 0;
  stonesArr.forEach((a, i) => a === stonesArr[i+1] ? counter++ : counter);
  return counter;
};

console.log(solve('RGBRGBRGGB'));