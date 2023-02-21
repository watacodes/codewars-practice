/*

Codewars, 5k: Last digit of a large number

*/

const lastDigit = (str1, str2) => {  
  if (+str2 === 0) return 1;
  return Math.pow(+str1.slice(-1), +str2.slice(-2) % 4 + 4) % 10;
}

console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"));
