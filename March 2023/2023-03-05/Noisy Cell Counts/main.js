/*

Codewars, 7k: Noisy Cell Counts

*/

const cleanedCounts = data => {
  let copyData = data.slice();
  copyData.forEach((e, i) => copyData[i+1] < e ? copyData[i+1] = copyData[i+1] + 1 : e);
  return copyData;
}

console.log(cleanedCounts([10,11,10]));