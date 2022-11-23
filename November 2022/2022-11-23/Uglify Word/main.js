/*

Codewars, 7k: Uglify Word

*/

const uglifyWord = str => {
  let flag = 1;
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z]/.test(str[i])) {
      if (flag === 1) {
        res += str[i].toUpperCase();
        flag = 0;
      } else {
        res += str[i].toLowerCase();
        flag = 1;
      }
    } else {
      res += str[i];
      flag = 1;
    }
  }
  return res;
}

console.log(uglifyWord('AAA'));