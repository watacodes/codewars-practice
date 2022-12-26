/*

Codewars, 7k: Convert Integer to Binary

*/

const toBinary = n => n >= 0 ? n.toString(2) : (n >>> 0).toString(2);
