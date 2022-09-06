/*

Codewars, 7k: Sum of numbers from 0 to N

We want to generate a function that computes the series starting from 0 and ending until the given number.

*/


var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let str = '';
    let res = 0;
    if (count === 0) {
      return '0=0';
    } else if (count < 0) {
      return `${count}<0`;
    }
    
    for (let i = 0; i <= count; i++) {
      res += i;
      if (i !== count) {
        str += `${i}+`;
      } else {
        str += `${i} = ${res}`;
      }
    }
    return str;
  };

  return SequenceSum;

})();