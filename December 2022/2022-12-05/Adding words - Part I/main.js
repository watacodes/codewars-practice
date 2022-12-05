/*

Codewars, 7k: Adding words - Part I

*/

class Arith {


  constructor(defaultNum) {
    this.defaultNum = defaultNum;
    this.obj = {
      'zero': 0,
      'one': 1,
      'two': 2,
      'three': 3,
      'four': 4,
      'five': 5,
      'six': 6,
      'seven': 7,
      'eight': 8,
      'nine': 9,
      'ten': 10
    };
     this.obj2 = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty'
    };
  }
  
  add(newNum) {
    let temp = this.obj[this.defaultNum] + this.obj[newNum];
    return this.obj2[Number(temp)];
  }
}