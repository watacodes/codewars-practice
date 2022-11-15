/*

Codewars, 7k: Bits Battle

For an input list of [5, 3, 14]:

odds: 5 and 3 => 101 and 11 => four 1s
evens: 14 => 1110 => one 0
Result: odds win the battle with 4-1

*/


const bitsBattle = arr => {
  const evenArr = arr.filter(v => v !== 0 && v % 2 === 0)
                     .map(a => a.toString(2)).join('').replace(/1/g,'').length;
  const oddArr = arr.filter(v => v !== 0 && v % 2 !== 0)
                    .map(a => a.toString(2)).join('').replace(/0/g,'').length;

  return evenArr > oddArr ? "evens win" : evenArr < oddArr ? 'odds win' : 'tie'; 
};


console.log(bitsBattle([0,1,2]))