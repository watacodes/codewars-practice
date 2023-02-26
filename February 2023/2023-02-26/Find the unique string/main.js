/*

Codewars, 5k: Find the unique string

*/


function findUniq(arr) {
  const mapped = arr.map(e => [...new Set(e.toLowerCase())].sort().join(''));
  let target;
  for (let i = 0; i < mapped.length - 1; i++) {
    if (i === 0 && mapped[i] !== mapped[i+1] && mapped[i+1] === mapped[i+2]) {
      target = i;
      break;
    } else if (mapped[i] !== mapped[i+1]) {
      target = i + 1;
      break;
    }
  }
  return arr[target];
}







console.log((findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])));
console.log((findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])));
