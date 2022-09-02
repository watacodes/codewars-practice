/*

Codewars, 7k: Check the exam

The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

*/

const checkExam = (first, second) => {
  let score = 0;
  for (let i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      score += 4;
    } else if (second[i] === '') {
      continue;
    } else {
      score--;
    }
  };
  return score <= 0 ? 0 : score;
};

console.log(checkExam(["c","c","b","c","a","c","a","a","b","a","b","a","a","b","a","c","b","c","b","c"], ["","c","b","b","a","a","c","b","b","","c","c","","c","","c","c","b","","b"]))