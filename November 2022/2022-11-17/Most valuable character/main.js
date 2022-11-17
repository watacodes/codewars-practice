/*

Codewars, 7k: Most valuable character

*/

const solve = str => {
  let occurrence = [...str].reduce((acc, curr, idx) => {
    if (!acc[curr]) {
      if ([...str].lastIndexOf(curr) !== idx) {
        acc[curr] = [...str].lastIndexOf(curr) - idx;
      } else {
        acc[curr] = 1;
      };
    };
    return acc;
  }, {});

  const max = Math.max(...Object.values(occurrence));
  occurrence = Object.keys(occurrence).sort().reduce((acc, curr) => (acc[curr] = occurrence[curr], acc), {});
  return Object.keys(occurrence).find(key => occurrence[key] === max);
};

console.log(solve('bcd'));