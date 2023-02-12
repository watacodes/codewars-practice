/*

Codewars, 7k: Give a shout to your friend walking towards you

*/

function madShout(sidewalk) {
  const distance = sidewalk.match(/Y[-]+F/gi) ? sidewalk.match(/Y[-]+F/gi)[0].length - 1 : 0;
  if (distance <= 2) return 'Oi F!';
  return 'O' + 'i'.repeat(Math.round(distance / 2)) + ' F!';
}