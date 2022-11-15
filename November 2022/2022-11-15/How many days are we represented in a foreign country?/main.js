/*

Codewars, 7k: How many days are we represented in a foreign country?

*/

const daysRepresented = arr => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i][0]; j <= arr[i][1]; j++) {
      if (res.indexOf(j) === -1) {
        res.push(j);
      }
    }
  }
  return res.length;
}
console.log(daysRepresented( [[2,8], [6,16],[17,26]]))