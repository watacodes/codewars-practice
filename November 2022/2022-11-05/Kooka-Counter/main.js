/*

Codewars, 7k: Kooka-Counter


*/

const kookaCounter = hehe => {
  const heheArr = hehe.split('a');
  let counter = 0;
  for (let i = 1; i < heheArr.length; i++) {
    if (heheArr[i] !== heheArr[i-1]) {
      counter++;
    };
  };
  return counter;
};


console.log(kookaCounter('HaHahahaHa'));