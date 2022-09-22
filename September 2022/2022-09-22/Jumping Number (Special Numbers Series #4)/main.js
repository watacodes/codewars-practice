/*

Codewars, 7k: Jumping Number (Special Numbers Series #4)

Jumping number is the number that All adjacent digits in it differ by 1.

Task
Given a number, Find if it is Jumping or not .

*/

const jumpingNumber = n => {
  let nArr = n.toString().split('').map(a => Number(a))
  if (nArr.length === 1) return 'Jumping!!';
  let counter = 0;
  while (counter < nArr.length - 1) {
    if (Math.abs(nArr[counter] - nArr[counter+1]) == 1) {
      counter++;
    } else {
      return 'Not!!';
    }
  }
  return 'Jumping!!'
}

console.log(jumpingNumber(76))