/*

Codewars, 7k: Strange mathematics

*/

// 1, 10, 11, 2, 3, 4, 5, 6... (11)
// 1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7... (15)

const strangeMath = (n, k) => {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  };

  const res = arr.sort();

  for (let i = 0; i < res.length; i++) {
    if (res[i] === k) {
      return i + 1;
    };
  };
  
  return k;
};

console.log(strangeMath(11, 2))