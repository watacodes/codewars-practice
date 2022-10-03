/*

Codewars, 7k: makeBackronym

*/

//preload variable: dict

const makeBackronym = s => s.toUpperCase().split('').map(a => dict[`${a}`]).join(' ');