/*

Codewars, 7k: The Office V - Find a Chair

*/

function meeting(x, need){
  if (need === 0) return 'Game On';
  const counter = [];
  
  for (const i of x) {
    const chair = Math.min(Math.max(i[1] - i[0].length, 0), need);
    counter.push(chair);
    need -= chair;
    if (need <= 0) {
      return counter;
    }
  }
  return 'Not enough!';
}