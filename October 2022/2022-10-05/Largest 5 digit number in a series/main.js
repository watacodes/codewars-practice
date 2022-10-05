/*

Codewars, 7k: Largest 5 digit number in a series

In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

*/

const solution = d => {
  if (d.length <= 5) return +d;
  let temp = d.slice(0, 5);
  for (let i = 1; i < d.length - 4; i++) {
    let compare = d.slice(i, i + 5);
    if (compare > temp) {
      temp = compare;
    };
  };
  return Number(temp);
};

console.log(solution('1234567890'))