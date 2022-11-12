/*

Codewars, 7k: Make acronym

*/

const toAcronym = str => str.split(' ').map(a => a[0].toUpperCase()).join('');