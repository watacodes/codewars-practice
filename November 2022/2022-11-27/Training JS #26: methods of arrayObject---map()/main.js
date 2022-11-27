/*

Codewars, 7k: Training JS #26: methods of arrayObject---map()

*/

const isolateIt = arr => {
  return arr.map(item => item.length % 2 === 0 ? item.slice(0, item.length / 2) + '|' + item.slice(item.length / 2) : item.slice(0, Math.floor(item.length / 2)) + '|' + item.slice(Math.ceil(item.length / 2)));
}

console.log(isolateIt(["abcd","efgh"]));