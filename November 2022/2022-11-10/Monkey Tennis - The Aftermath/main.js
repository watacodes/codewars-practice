/*

Codewars, 7k: Monkey Tennis - The Aftermath


*/

const ballCollector = detritus => {
  const onlyTennis = { weight: 0 };
  detritus.forEach(a => a === 58 ? onlyTennis.weight += 58 : a);
  return onlyTennis;
};

console.log(ballCollector([58, 68, 62, 69, 58]))