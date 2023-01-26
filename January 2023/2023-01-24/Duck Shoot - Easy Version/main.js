/*

Codewars, 7k: Duck Shoot - Easy Version

*/

function duckShoot(ammo, aim, ducks){
  let hitCount = Math.floor(ammo * aim);
  ducks = ducks.split('');
  for (let i = 0; i < ducks.length; i++) {
    if (hitCount === 0) return ducks.join('');
    if (ducks[i] == '2') {
      ducks[i] = 'X';
      hitCount--;
    }
  }
  return ducks.join('');
}