/*

Codewars, 7k: Find all non-consecutive numbers

*/

const allNonConsecutive = arr => {
  let res = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i+1] !== arr[i] + 1 && i !== arr.length - 1) {
      let obj = {
        i: i+1,
        n: arr[i+1]
      };
      res.push(obj);
    };
  };
  return res;
};

console.log(allNonConsecutive([1,2,3,4,6,7,8,10]))