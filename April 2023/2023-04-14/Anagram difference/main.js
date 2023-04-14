/*

Codewars, 6k: Anagram difference

*/

function anagramDifference(w1,w2){
  const obj = {};
  
  for (const one of w1) {
    obj[one] > 0 ? obj[one]++ : obj[one] = 1;
  }
  
  let counter = 0;
  
  for (const two of w2) {
    obj[two] > 0 ? obj[two]-- : counter++;
  }
  
  return counter + Object.values(obj).reduce((acc, curr) => acc + curr, 0);
}
