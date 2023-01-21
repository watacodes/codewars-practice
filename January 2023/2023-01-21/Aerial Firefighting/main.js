/*

Codewars, 7k: Aerial Firefighting

*/

function waterbombs(fire, w) {
  if (!fire.match(/x/g)) return 0;
  const onlyFire = fire.split('Y').filter(e => e !== '').map(e => e.length <= w ? 1 : Math.ceil(e.length / w));
  return onlyFire.reduce((acc, curr) => acc + curr, 0);
}