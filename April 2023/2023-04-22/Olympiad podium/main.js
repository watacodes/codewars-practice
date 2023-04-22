/*

Codewars, 6k: Olympiad podium

*/

function podium(scores){
  const z = Object.entries(scores).filter(([k, v]) => v.length)
                  .map(([k, v]) => [k,v.reduce((s, n) => s + n, 0)])
                  .reduce((o, [k, v])=>(o[v] = o[v] || [], o[v].push(k), o), {});
  const res = {};
  const r = Object.keys(z).map(n=>+n).sort((a,b)=>a-b);
  for (let t = 0; t < 3 && r.length;) {
    let l = ['gold', 'silver', 'bronze'][t], v = r.pop(), p = z[v];
    res[l] = { score: v, players: p.sort() }
    t += p.length;
  }
  return res;
}