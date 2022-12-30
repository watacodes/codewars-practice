/*

Codewars, 7k: Inverting a Hash

*/

const invertHash = hash => {
  const obj = {};
  for (let key in Object.values(hash)) {
    obj[Object.values(hash)[key]] = Object.keys(hash)[key];
  }
  return obj;
}