/*

Codewars, 7k: Xmas Tree

*/

const xMasTree = n => {
  const tree = [];
  const width = 2 * n - 1;
  const stem = '_'.repeat((width - 1) / 2) + '#' + '_'.repeat((width - 1) / 2);
  for (let i = 1; i <= n; i++) {
    if (i !== n) {
      let leavesCount = 2 * i - 1;
      let blank = '_'.repeat((width - leavesCount) / 2);
      tree.push(blank + '#'.repeat(leavesCount) + blank);
    } else {
      tree.push('#'.repeat(width));
    }
  }
  tree.push(stem, stem);
  return tree;
}