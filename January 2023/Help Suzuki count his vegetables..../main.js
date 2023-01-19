/*

Codewars, 7k: Help Suzuki count his vegetables....

*/

function countVegetables(str) {
  const vegetables = "cabbage carrot celery cucumber mushroom onion pepper potato tofu turnip";
  const occurrence = str.split(' ').reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  const res = [];
  for (let i of Object.keys(occurrence)) {
    res.push([occurrence[i], i]);
  }
  return res.filter(e => vegetables.split(' ').includes(e[1])).sort((a, b) => b[0] - a[0] || b[1].localeCompare(a[1]));
}