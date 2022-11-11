/*

Codewars, 7k: Running out of space

*/

const spacey = arr => {
  const res = [];
  for (let i = 1; i <= arr.length; i++) {
    res.push(arr.slice(0, i).join(''));
  };
  return res;
};

console.log(spacey(['this','cheese','has','no','holes']))