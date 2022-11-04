/*

Codewars, 7k: MinMinMax


*/

const minMinMax = arr => {
  const sortedArr = arr.sort((a, b) => a - b);
  const minimum = sortedArr[0];
  let minimumAbsent = minimum;
  while (sortedArr.includes(minimumAbsent)) {
    minimumAbsent++;
  };
  return [sortedArr[0], minimumAbsent, sortedArr[sortedArr.length - 1]];
};

console.log(minMinMax([-1, 4, 5, -23, 24]))