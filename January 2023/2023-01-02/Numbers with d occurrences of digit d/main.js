/*

Codewars, 7k: Numbers with d occurrences of digit d

*/

const isDd = n => {
  const occurrence = [...n.toString()].reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  return Object.keys(occurrence).some(n => n == occurrence[n]);
}