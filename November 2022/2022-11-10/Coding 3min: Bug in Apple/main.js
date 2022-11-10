/*

Codewars, 7k: Coding 3min: Bug in Apple


*/

const sc = apple => {
  let arr = [];
  for (let i in apple) {
    if (apple[i].includes('B')) {
      arr.push(+i, apple[i].indexOf('B'));
    }
  }
  return arr;
};

const apple = [
  ["A","A","A","A","A"],
  ["A","B","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"]
  ];

console.log(sc(apple));