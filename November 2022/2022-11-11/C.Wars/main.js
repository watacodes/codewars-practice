/*

Codewars, 7k: C.Wars


*/

const initials = str => {
  let strArr = str.split(' ');
  return strArr.map((a, i) => i === strArr.length - 1 ? a[0].toUpperCase() + a.slice(1) : a[0].toUpperCase()).join('.');
};

console.log(initials('code wars'))