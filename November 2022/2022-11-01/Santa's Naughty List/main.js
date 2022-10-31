/*

Codewars, 7k: Santa's Naughty List

Go through a list of children, and return a list containing every child who appeared on Santa's list. Do not add any child more than once. Output should be sorted.

Comparison should be case sensitive and the returned list should contain only one copy of each name: "Sam" and "sam" are different, but "sAm" and "sAm" are not.

*/

const findChildren = (santasList, children) => {
  const notNaughty = [...new Set(santasList)];
  const naughty = [...new Set(children)];
  return notNaughty.filter(child => naughty.includes(child))
                   .sort();
};