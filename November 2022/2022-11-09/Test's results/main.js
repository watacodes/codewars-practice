/*

Codewars, 7k: Test's results

*/

const testResult = arr => {
  const average = Math.round(arr.reduce((acc, curr) => acc + curr, 0) / arr.length * 1000) / 1000;
  const arrConverted = arr.map(a => a >= 9 ? 'h' : a >= 7 ? 'a' : 'l');
  const occurrence = {
    'h': 0,
    'a': 0,
    'l': 0
  };

  arrConverted.forEach(a => occurrence[a]++);
  
  if (arrConverted.every(a => a === 'h')) return [average, occurrence, 'They did well'];
  return [average, occurrence];
};

console.log(testResult([5, 6, 4, 8, 9, 8, 9, 10, 10, 10]))