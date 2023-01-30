/*

Codewars, 7k: ScholarStem: Unit 6- Baby count!

*/

function countName(nameArr, name) {
  const occurrence = nameArr.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  return occurrence[name];
};