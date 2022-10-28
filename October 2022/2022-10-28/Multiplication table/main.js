/*

Codewars, 6k: Multiplication table


Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]


*/

const multiplicationTable = size => {
  let res = [];
  let temp = [];
  let counter = 1;
  
  for (let row = 1; row <= size; row++) {
    temp.push(row);
  }
  
  while (counter <= size) {
    res.push(temp.map(a => a * counter));
    counter++;
  }

  return res;
};

console.log(multiplicationTable(3));