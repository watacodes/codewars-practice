/*

Codewars, 7k: Number Pairs

*/

const getLargerNumbers = (arr1, arr2) => {
  const higher = [];
  for (let i in arr1) {
    if (arr1[i] >= arr2[i]) {
      higher.push(arr1[i]);
    } else {
      higher.push(arr2[i]);
    };
  };
  return higher;
};