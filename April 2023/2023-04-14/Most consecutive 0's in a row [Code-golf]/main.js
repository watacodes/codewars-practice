/*

Codewars, 6k: Most consecutive 0's in a row [Code-golf]

*/

f=i=>Math.max(...String(i).split(/[^0]/g).map(e=>e.length))