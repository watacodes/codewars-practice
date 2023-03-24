/*

Codewars, 7k: I'm already Tracer

*/

function teamComp(heroes) {
  const comp = [0, 0, 0];
  const onlyUnique = [...new Set(heroes)];
  heroes.forEach(e => TANK.includes(e) ? comp[0]++ : DAMAGE.includes(e) ? comp[1]++ : SUPPORT.includes(e) ? comp[2]++ : e);
  return comp.reduce((acc, curr) => acc + curr, 0) !== 6 || onlyUnique.length !== heroes.length ? 'GG' : comp;
}


