/*

Codewars, 7k: Number-Star ladder

Task
Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):

Note: There is no newline in the end (after the pattern ends)

Examples
pattern(3) should return "1\n1*2\n1**3", e.g. the following:

1
1*2
1**3

*/

const pattern = n => {
  let result = '';
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      result += '1\n';
    } else if (i === n) {
      result += `1${'*'.repeat(i - 1)}${i}`;
    } else {
      result += `1${'*'.repeat(i - 1)}${i}\n`;
    }
  }
  return result;
};

console.log(pattern(3));