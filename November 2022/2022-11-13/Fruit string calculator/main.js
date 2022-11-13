/*

Codewars, 7k: Fruit string calculator


*/

const panda = "Panda has 48 apples and loses 4"

const calculate = str => {
  if (str.match(/loses/g)) {
    const num = str.split('loses').map(a => a.replace(/\D/g, ''));
    return num[0] - num[1];
  };

  if (str.match(/gains/g)) {
    const num = str.split('gains').map(a => a.replace(/\D/g, ''));
    return +num[0] + +num[1];
  };
};

console.log(calculate(panda))