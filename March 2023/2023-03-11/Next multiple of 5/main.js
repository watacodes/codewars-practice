/*

Codewars, 6k: Next multiple of 5

*/

const ceil = n => Math.ceil(n / 5) * 5;

const nextMultipleOfFive = n => {
  if (n === 0) return 5;
  
  for (let i = 1; i < 4; i++) {
    const pow = 2 ** i;
    const res = n * pow;
    const ceilNum = ceil(res);
    if (pow + res > ceilNum) {
      return ceilNum;
    }
  }
  
}