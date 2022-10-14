/*

Codewars, 7k: Product of Array Items

Calculate the product of all elements in an array.

If the array is null or is empty, the function should return null.

*/

const product = values => !values || values.length === 0 ? null : values.reduce((acc, curr) => acc * curr);