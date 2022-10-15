/*

Codewars, 7k: Pandemia


*/

const infected = s => {
  let continent = s.split('X');
  let infected = 0;
  let total = 0;

  if (!s.includes('1') || !s.includes('0')) return 0;
  continent.forEach(land => {
    if (land.includes('1')) {
      land = land.replace(/0/gi, '1');
      infected += land.length;
    }
    total += land.length;
  });
  return infected / total * 100;
};
console.log(4/11)

console.log(infected("01000000X000X011X0X"))

console.log('1'.repeat(7))