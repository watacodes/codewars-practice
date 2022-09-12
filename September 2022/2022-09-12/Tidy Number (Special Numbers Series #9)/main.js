/*

Codewars, 7k: Tidy Number (Special Numbers Series #9)

Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .

Input >> Output Examples
tidyNumber (12) ==> return (true)
Explanation:
The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

*/

const tidyNumber = n => n.toString().split('').map(a => +a).sort((a, b) => a - b).join('') == n;

console.log(tidyNumber(2789));