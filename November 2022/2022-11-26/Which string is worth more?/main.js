/*

Codewars, 7k: Which string is worth more?

*/

const highestValue = (a, b) => {
  const asciiA = [...a].map(a => a.charCodeAt()).reduce((acc, curr) => acc + curr, 0);
  const asciiB = [...b].map(b => b.charCodeAt()).reduce((acc, curr) => acc + curr, 0);

  return asciiA > asciiB 
          ? a 
          : asciiA === asciiB
          ? a
          : b; 
}


console.log(highestValue('HELLO'))