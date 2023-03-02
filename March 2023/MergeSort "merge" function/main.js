/*

Codewars, 5k: MergeSort "merge" function

*/

function mergesorted(a, b) {
  let concat = a.concat(b);

  for (let i = 0; i < concat.length - 1; i++) {
    let status = false;

    for (let k = 0; k < concat.length - 1 - i; k++) {
      if (concat[k] > concat[k + 1]) {
        let temp = concat[k];
        concat[k] = concat[k + 1];
        concat[k + 1] = temp;
        status = true;
      }
    }
  }
  return concat;
}

console.log(mergesorted([4], [1, 2, 3]));


