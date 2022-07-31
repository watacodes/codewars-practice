/*

Codewars 8k: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4


Write a function that checks if a given string (case insensitive) is a palindrome.


*/

const isPalindrome = x => {
  let xArr = x.split('');
  let yArr = [];
  for (let i = x.length - 1; i >= 0; i--) {
    yArr.push(x[i]);
  }
  let yStr = yArr.join('').toLowerCase();
  return x.toLowerCase() === yStr ? true : false;
};

console.log(isPalindrome('hello'))
console.log(isPalindrome('AbBa'));

