/*

Codewars, 6k: Uncollapse Digits

*/


function uncollapse(digits){
  const str = "zero one two three four five six seven eight nine ten";
  const strDigits = str.split(' ');
  const res = [];
  let idx = 0;
  
  for (let i = 0; i <= digits.length; i++) {
    const curr = digits.slice(idx, i);
    if (strDigits.includes(curr)) {
      res.push(curr);
      idx = i;
    }
  }
  
  return res.join(' ');
}