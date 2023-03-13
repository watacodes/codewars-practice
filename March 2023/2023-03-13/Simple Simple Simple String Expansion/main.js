/*

Codewars, 6k: Simple Simple Simple String Expansion

*/

const stringExpansion = s => s.replace(/(\d)+(\D*)/g, (_, p1, p2) => p2.replace(/\D/g, letter => letter.repeat(p1)));