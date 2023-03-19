/*

Codewars, 6k: Happy Numbers

*/

const isHappy = (num, arr = []) => {
  arr.push(num);  
  
  if (num === 1) return true;
  
  num = +([...num.toString()].reduce((acc, curr) => acc + (+curr) * (+curr), 0));
  
  return arr.includes(num) ? false : isHappy(num, arr);
};

function happyNumbers(x, res = []) {
    
  for (let i = 1; i <= x; i++) {
    if (isHappy(i)) {
      res.push(i);
    }
  }
  
  return res;
}
console.log(happyNumbers(10));