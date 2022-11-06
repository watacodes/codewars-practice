/*

Codewars, 7k: The Lazy Startup Office

*/

const binRota = arr => arr.map((item, i) => i % 2 === 1 ? item.reverse() : item).flat();

console.log(binRota([ ["Stefan", "Raj",    "Marie"],
["Alexa",  "Amy",    "Edward"],
["Liz",    "Claire", "Juan"],
["Dee",    "Luke",   "Katie"] ]));