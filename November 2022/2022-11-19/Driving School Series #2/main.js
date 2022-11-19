/*

Codewars, 7k: Driving School Series #2

*/

const cost = mins => {
  if (mins <= 60) return 30;
  let grace = (mins - 60) % 30;
  let deductedMins = Math.ceil((mins - 60) / 30) * 30;
  return grace <= 5 ? 30 + Math.floor((mins - 60) / 30) * 10 : 30 + deductedMins / 3;
};


console.log(cost(273))