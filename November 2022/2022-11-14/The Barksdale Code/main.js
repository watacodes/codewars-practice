/*

Codewars, 7k: The Barksdale Code

*/

const decode = str => {
  return [...str].map(a => a == 0 ? 5 : a == 5 ? 0 : 10 - a).join(''); 
};




console.log(decode("4103432323"));