/*

Codewars, 7k: Sort an array by value and index

*/

const sortByValueAndIndex = arr => {
  // TIL: I can return an object using map by wrapping the object in the parentheses.
  const productArr = arr.map((v, i) => ({ v, i: i + 1}))
                        .sort((a, b) => a.v * a.i - b.v * b.i)
                        .map(({v}) => v)
  return productArr
}

console.log(sortByValueAndIndex([23, 2, 3, 4, 5]))