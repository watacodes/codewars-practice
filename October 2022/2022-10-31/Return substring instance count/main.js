/*

Codewars, 7k: Return substring instance count

Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1

*/

const solution = (str, pattern) => {
  const regex = new RegExp(pattern, 'g');
  if (!str.match(regex)) return 0;
  return str.match(regex).length;
};