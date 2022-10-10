/*

Codewars, 7k: Calculate Two People's Individual Ages

Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative

*/

const getAges = (sum, diff) => {
  if (sum < 0 || diff < 0) return null;
  let younger = (sum - diff) / 2;
  let older = younger + diff;
  return younger < 0 ? null : [older, younger];
};