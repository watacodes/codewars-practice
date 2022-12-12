/*

Codewars, 7k: Katastrophe!

*/

function strongEnough(earthquake, age) {
  const magnitude = earthquake.map(a => a.reduce((acc, curr) => acc + curr, 0))
                              .reduce((acc, curr) => acc * curr);
  let strength = 1000;
  
  while (age > 0 && strength > magnitude) {
    age--;
    strength *= .99;
  }
  return strength > magnitude ? 'Safe!' : 'Needs Reinforcement!';
}