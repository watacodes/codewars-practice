/*

Codewars, 8k: Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

*/

const remove = (s, n) => {
  let str = s;
  let num = 0;
  let res = str.replace(/!/g, _ => num++ < n ? '' : _);
  return res;
};

console.log(remove("!!!Hi!!!! Hi!", 1))