/*

Codewars, 7k: Driving School Series #1

*/

const passed = list => {
  const peoplePassed = list.filter(a => a <= 18);
  return Math.round(peoplePassed.reduce((acc, curr) => acc + curr, 0) / peoplePassed.length) || 'No pass scores registered.';
} 