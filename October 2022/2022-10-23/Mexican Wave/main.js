/*

Codewars, 6k: Mexican Wave


*/

const wave = str => {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (i == 0 && str[i] !== ' ') {
      arr.push(str[0].toUpperCase() + str.slice(i+1))
    } else if (str[i] === ' ') {
      continue;
    } else {
      arr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i+1))
    }
  }
  return arr;
}

console.log(wave('hello'))