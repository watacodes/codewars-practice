/*

Codewars, 7k: Olympic Rings

*/


function olympicRing(str) {
  const regex = /[abdegopqADOPQR]/;
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/B/g)) {
      counter += 2;
    } else if (regex.test(str[i])) {
      counter++;
    }
  }
  const result = Math.floor(counter / 2);
  return result <= 1 ? 'Not even a medal!' : result === 2 ? 'Bronze!' : result === 3 ? 'Silver!' : 'Gold!';  
}