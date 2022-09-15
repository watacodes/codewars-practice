/*

Codewars, 7k: Disarium Number (Special Numbers Series #3)

Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .
Return the result as String
Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 8^1 + 9^2 = 89 , thus output is "Disarium !!"

*/

const disariumNumber = n => {
  let numArr = n.toString().split('');
  return numArr.reduce((a, b, i) => a + Number(b) ** (i+1), 0) === n ? "Disarium !!" : "Not !!";
};

console.log(disariumNumber(89));

