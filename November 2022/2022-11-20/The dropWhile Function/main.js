/*

Codewars, 7k: The dropWhile Function

*/

const dropWhile = (arr, pred) => arr.length && pred(arr[0]) ? dropWhile(arr.slice(1), pred) : arr;