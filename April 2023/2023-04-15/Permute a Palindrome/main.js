/*

Codewars, 6k: Permute a Palindrome

*/

function permuteAPalindrome(input) { 
  const res = new Set();
  
  [...input].map(c => {
    if (res.has(c)) {
      res.delete(c);
    } else {
      res.add(c);
    }
  });
  
  return res.size < 2;
};
