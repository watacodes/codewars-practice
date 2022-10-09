/*

Codewars, 7k: Complete The Pattern #2

Task:
You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.

Note: Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:
(n)(n-1)(n-2)...4321
(n)(n-1)(n-2)...432
(n)(n-1)(n-2)...43
(n)(n-1)(n-2)...4
...............
..............
(n)(n-1)(n-2)
(n)(n-1)
(n)
Examples:
pattern(4):

4321
432
43
4

*/

const pattern = n => {
  let output = '';
  let numStr = '';
  while (n > 0) {
    numStr += n;
    output = numStr + '\n' + output;
    n--;
  };
  return output.trim();
};

console.log(pattern(4));