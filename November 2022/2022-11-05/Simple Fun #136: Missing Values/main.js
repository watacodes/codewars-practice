/*

Codewars, 7k: Simple Fun #136: Missing Values


*/

const arr = [6, 5, 4, 100, 6, 5, 4, 100, 6, 5, 4, 200];

const missingValues = arr => {
  const occurrence = arr.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});

  let twice = 0;
  let once = 0;

  for (let i in Object.values(occurrence)) {
    if (Object.values(occurrence)[i] === 2) {
      once += Number(Object.keys(occurrence)[i]);
    }
    if (Object.values(occurrence)[i] === 1) {
      twice += Number(Object.keys(occurrence)[i]);
    }
  };
  return twice ** 2 * once;
};

console.log(missingValues(arr))