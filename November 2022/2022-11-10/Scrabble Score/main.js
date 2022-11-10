/*

Codewars, 7k: Scrabble Score


*/

const scrabbleScore = str => {
  let counter = 0;
  let strArr = [...str.toLowerCase()];
  const one = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'];
  const two = ['d', 'g'];
  const three = ['b', 'c', 'm', 'p'];
  const four = ['f', 'h', 'v', 'w', 'y'];
  const five = ['k'];
  const eight = ['j', 'x'];
  const ten = ['q', 'z'];

  for (let i of strArr) {
    if (one.includes(i)) {
      counter++;
    } else if (two.includes(i)) {
      counter += 2;
    } else if (three.includes(i)) {
      counter += 3;
    } else if (four.includes(i)) {
      counter += 4;
    } else if (five.includes(i)) {
      counter += 5;
    } else if (eight.includes(i)) {
      counter += 8;
    } else if (ten.includes(i)) {
      counter += 10;
    };
  };
  return counter;
};

console.log(scrabbleScore('cabbage'));