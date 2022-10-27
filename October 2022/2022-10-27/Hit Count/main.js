/*

Codewars, 7k: Hit Count

*/

const counterEffect = hits => {
  let res = [];
  let hitsCounter = hits.split('').map(a => +a);
  hitsCounter.forEach(n => {
    let temp = [];
    for (let i = 0; i <= n; i++) {
      temp.push(i);
    }
    res.push(temp);
  })
  return res;
}

console.log(counterEffect('1250'))