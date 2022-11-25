/*

Codewars, 7k: Convert Hash To An Array

*/

const convertHashToArray = obj => {
  return Object.entries(obj).sort(([a], [b]) => a.localeCompare(b))
}

console.log(convertHashToArray({'name': 'Wataru', 'age': 27}))