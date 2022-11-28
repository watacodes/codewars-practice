/*

Codewars, 7k: Coding 3min : Remove screws I

*/

const sc = screws => {
  return [...screws].reduce((acc, curr, i) => curr === [...screws][i+1] ? acc + 2 : acc + 7, 1) - 7;
}

const testStr = "-+-+-----------"

console.log(sc(testStr));