/*

Codewars, 7k: Training JS #25: methods of arrayObject---reverse() and sort()

*/

function sortIt(arr) {
  const occurrence = arr.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  return arr.slice().sort((a, b) => occurrence[a] - occurrence[b] || b - a);
}