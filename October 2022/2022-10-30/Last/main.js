/*

Codewars, 7k: Last

Find the last element of the given argument(s).

Examples
last([1, 2, 3, 4] ) // =>  4
last("xyz")         // => "z"
last(1, 2, 3, 4)    // =>  4
In javascript and CoffeeScript a list will be an array, a string or the list of arguments.

*/

const last = (param1, ...args) => {
  if (args.length > 1) return args.pop();
  if (typeof param1 === 'string') {
    param1 = param1.split('');
  }
  return !Array.isArray(param1) ? param1 : param1[param1.length - 1];
};

console.log(last(1,2,3,4))