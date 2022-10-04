/*

Codewars, 7k: Computer problem series #1: Fill the Hard Disk Drive

Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)
Output:
Number of files that can be fully saved in the HD.
Examples:
save([4,4,4,3,3], 12) -> 3
# 4+4+4 <= 12, but 4+4+4+3 > 12

*/

const save = (s, hd) => {
  let sum = 0;
  let counter = 0;
  for (let i in s) {
    if (sum + s[i] <= hd) {
      sum += s[i];
      counter++;
    } else {
      return counter;
    };
  };
  return counter;
};