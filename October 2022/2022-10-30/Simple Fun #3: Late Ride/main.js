/*

Codewars, 7k: Simple Fun #3: Late Ride


*/

const lateRide = n => {
  const hours = String(Math.floor(n / 60));
  const minutes = String(n % 60);
  const arr = hours.split('').concat(minutes.split(''));
  return arr.reduce((acc, curr) => acc + +curr, 0);
};

console.log(lateRide(808));