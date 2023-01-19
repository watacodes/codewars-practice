/*

Codewars, 7k: Sectional Array Sort

*/

function sectSort(array, start, length = 0) {
  if (length === 0) {
    const keep = array.slice(0, start);
    const sort = array.slice(start).sort((a, b) => a - b);
    return keep.concat(sort);
  } else {
    const first = array.slice(0, start);
    const last = array.slice(start + length);
    const middle = array.slice(start, start + length).sort((a, b) => a - b);
    return first.concat(middle, last);
  }
}