/*

Codewars, 6k: Balance the arrays

*/

function balance (arr1, arr2) {
  const a1Occ = arr1.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  
  const a2Occ = arr2.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  
  const a1Val = Object.entries(a1Occ).map(e => e[1]).sort((a, b) => a - b);
  const a2Val = Object.entries(a2Occ).map(e => e[1]).sort((a, b) => a - b);
  
  return a1Val.length > a2Val.length ? a1Val.every((e, i) => e === a2Val[i]) : a2Val.every((e, i) => e === a1Val[i]);
};