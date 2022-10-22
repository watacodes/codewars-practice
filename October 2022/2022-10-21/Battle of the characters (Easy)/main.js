/*

Codewars, 7k: Battle of the characters (Easy)

Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Strings will consist of uppercase letters only
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples:
  battle("ONE", "TWO"); // => "TWO"`
  battle("ONE", "NEO"); // => "Tie!"

*/

const battle = (p1, p2) => {
  let p1Power = p1.split('').map(w => w.toLowerCase().charCodeAt() - 96).reduce((acc, curr) => acc + curr, 0);
  let p2Power = p2.split('').map(w => w.toLowerCase().charCodeAt() - 96).reduce((acc, curr) => acc + curr, 0);
  return p1Power === p2Power ? 'Tie!' : p1Power > p2Power ? p1 : p2;
};