/*

Codewars, 8k: Training JS #9: loop statement --while and do..while

Coding in function padIt, function accept 2 parameters:

str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
n, it's a number, how many times to pad the string.
Behaviour
You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.

*/

const padIt = (s, n) => {
  //   let star = '*';
  //   let left = Math.ceil(n / 2);
  //   let right = Math.floor(n / 2);
  //   return star.repeat(left) + s + star.repeat(right);
    let star = '*';
    let res = '';
    let counter = 0;
    do {
      res += star;
      counter++;
    } while (counter < Math.ceil(n / 2));
    res += s;
    
    counter = 0;
    while (counter < Math.floor(n / 2)) {
      res += star;
      counter++;
    }
    return res;
  };  

console.log(padIt("a", 2));