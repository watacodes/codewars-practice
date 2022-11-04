/*

Codewars, 7k: Number to digit tiers


*/

const createArrayOfTiers = num => {
  let numStr = String(num);
  const arr = [];
  for (let i = 1; i <= numStr.length; i++) {
    arr.push(numStr.slice(0, i));
  };
  return arr;
};

console.log(createArrayOfTiers(420));