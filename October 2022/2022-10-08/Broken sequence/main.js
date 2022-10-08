/*

Codewars, 7k: Broken sequence

You receive some random elements as a space-delimited string. Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4).

Return:

0 if the elements can form such a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them ("broken", e.g. "1 2 4" or "1 5")

*/

const findMissingNumber = s => {
  let sArr = s.split(' ').map(a => +a).sort((a, b) => a - b);
  if (!s) return 0;
  if (s.match(/[a-z]/gi) || sArr[0] != 1) return 1;
  for (let i = 0; i < sArr.length - 1; i++) {
    if (sArr[i+1] !== sArr[i] + 1) {
      return sArr[i] + 1
    };
  };
  return 0;
};

console.log(findMissingNumber("1 2 3 4 5"))