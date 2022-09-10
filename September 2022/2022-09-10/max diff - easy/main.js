/*

Codewars, 7k: max diff - easy

You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

*/

const maxDiff = l => !Array.isArray(l) || l.length != 0 
                      ? Math.abs(l.sort((a, b) => a - b)[0] - l.sort((a, b) => a - b)[l.length - 1])
                      : 0;