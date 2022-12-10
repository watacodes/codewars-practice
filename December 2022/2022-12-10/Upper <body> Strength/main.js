/*

Codewars, 7k: Upper <body> Strength

*/

const alexMistakes = (numberOfKata, timeLimit) => {
  let counter = 0;
  let mistakes = timeLimit - numberOfKata * 6;
  while (mistakes >= 0) {
    mistakes -= 5 * Math.pow(2, counter);
    counter++;
  }
  return Math.max(counter - 1, 0);
}