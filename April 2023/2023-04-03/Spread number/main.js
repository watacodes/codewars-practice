/*

Codewars, 6k: Spread number

*/

Number.prototype[Symbol.iterator] = function* () {
  for (let i = 0; i < this; i++) {
    yield i + 1;
  }
}