/*

Codewars, 7k: Find array

*/

const findArray = (arr1, arr2) => arr2.map(e => arr1[e]).filter(a => a !== undefined);