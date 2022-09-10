/*

Codewars, 7k: Balanced Number (Special Numbers Series #1 )

Definition
Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.

Task
Given a number, Find if it is Balanced or not .

*/

// 622226
// 3443

const balancedNum = n => {
  let left, right;

  if (n.toString().length <= 2) {
    return "Balanced";
  } else if (n.toString().length % 2 === 0) {
    if (n.toString().length === 4) {
      return (n.toString().charAt(0) === n.toString().charAt(3)) ? "Balanced" : "Not Balanced";
    } else {
      left = n.toString().split('').slice(0, Math.round(n.toString().length / 2 - 1));
    right = n.toString().split('').slice(Math.round(n.toString().length / 2 + 1));
    }
  } else {
    left = n.toString().split('').slice(0, Math.round(n.toString().length / 2));
    right = n.toString().split('').slice(Math.round(n.toString().length / 2 - 1));
  }
  console.log(left, right)
  return left.reduce((a, b) => a + +b, 0) === right.reduce((a, b) => a + +b, 0) ? "Balanced" : "Not Balanced";
};
console.log(balancedNum(4234))