/*

Codewars, 7k: The alphabet product

*/

/* 

A, B, C, D, AxB, BxC, CxD, DxA

*/

function alphabet(ns) {
  const sorted = ns.sort((a, b) => a - b);
  for (let i = 0; i < sorted.length - 1; i++) {
    const tempSum = sorted[i] * sorted[i+1];
    const idx = sorted.indexOf(tempSum);
    if (idx > -1) {
      sorted.splice(idx, 1);
    }
  }
  return sorted[3];
}