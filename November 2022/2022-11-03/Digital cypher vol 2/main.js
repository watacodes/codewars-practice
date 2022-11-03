/*

Codewars, 7k: Digital cypher vol 2

[ 20, 12, 18, 30, 21]
  [1, 9, 3, 9]
  [0, 1, 2, 3]
  [19, 3, 15, 21, 20]
  [0, 1, 2, 3, 0]
*/



const decode = (arr, code) => {
  const codeArr = String(code).split('').map(a => +a);
  const decodedArr = arr.map((n, i) => {
    if (i >= codeArr.length) {
      i = i % codeArr.length;
      return n -= codeArr[i];
    } else {
      return n -= codeArr[i];
    };
  });

  const obj = {};
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 1; i <= 26; i++) {
    obj[i] = alpha[i-1];
  }

  console.log(alpha.length);
  return decodedArr.map(n => obj[n])
                   .join('');
};

console.log(decode([ 20, 12, 18, 30, 21],1939));
