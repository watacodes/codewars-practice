/*

Codewars, 7k: Friday the 13th Part 1

*/

const killcount = (arr, jason) => arr.filter(person => person[1] < jason).map(a => a[0]);