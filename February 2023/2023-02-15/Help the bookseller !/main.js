/*

Codewars, 6k: Help the bookseller !

*/

function stockList(books, categories) {
  if (categories.length === 0 || books.length === 0) return '';
  const categoriesSum = {};
  categories.forEach(e => categoriesSum[e] = 0);
  const booksFirstLetter = books.map(e => e.split(' ')[0][0]);
  const booksNums = books.map(e => e.split(' ')[1]);

  for (let i = 0; i < booksNums.length; i++) {
    if (categories.includes(booksFirstLetter[i])) {
      categoriesSum[booksFirstLetter[i]] += +booksNums[i];
    }
  }

  let res = '';

  for (let i = 0; i < Object.keys(categoriesSum).length; i++) {
    let key = Object.keys(categoriesSum)[i];
    if (i + 1 !== Object.keys(categoriesSum).length) {
      res += `(${key} : ${categoriesSum[key]}) - `;
    } else {
      res += `(${key} : ${categoriesSum[key]})`;
    }
  }
  return res;
}