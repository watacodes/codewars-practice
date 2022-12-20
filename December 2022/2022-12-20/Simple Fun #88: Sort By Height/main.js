/*

Simple Fun #88: Sort By Height

*/

const testArr = [-1, 150, 190, 170, -1, -1, 160, 180];

const sortByHeight = a => {
  const treeIdx = [];
  const res = [];
  const withoutTrees = a.filter(a => a !== -1).sort((a, b) => a - b);
  a.forEach((a, i) => a === -1 ? treeIdx.push(i) : a);
  let counter = 0;
  for (let i = 0; i < a.length; i++) {
    if (treeIdx.includes(i)) {
      res.push(-1);
    } else {
      res.push(withoutTrees[counter]);
      counter++;
    }
  }
  return res;
}

console.log(sortByHeight(testArr));