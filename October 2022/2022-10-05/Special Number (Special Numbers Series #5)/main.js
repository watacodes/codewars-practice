/*

Codewars, 7k: Special Number (Special Numbers Series #5)

A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

Given a number determine if it special number or not.

*/

const specialNumber = n => String(n).match(/^[012345]+$/g) ? 'Special!!' : 'NOT!!';