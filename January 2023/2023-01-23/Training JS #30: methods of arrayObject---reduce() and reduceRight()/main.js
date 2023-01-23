/*

Codewars, 7k: Training JS #30: methods of arrayObject---reduce() and reduceRight()

*/

function tailAndHead(arr) {
  const tailHeadSum = arr.reduce((acc, curr, idx) => {
    const tailHead = +String(curr).slice(-1) + +String(arr[idx + 1]).slice(0, 1);
    acc[idx] = tailHead;
    return acc;
  }, []).filter(e => !isNaN(e));
  return tailHeadSum.reduce((acc, curr) => acc * curr);
}