/*

Codewars, 7k: Automorphic Number (Special Numbers Series #6)

Definition

A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .

*/

const automorphic = n => n == (n ** 2).toString().slice((n ** 2).toString().length - n.toString().length) ? "Automorphic" : "Not!!" ;

console.log(automorphic(95));