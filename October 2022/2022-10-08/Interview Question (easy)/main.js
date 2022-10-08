/*

Codewars, 7k: Interview Question (easy)

You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

For example:

"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
As you can see, the letter c is shown only once, but with 2 asterisks.

The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

Note that the return string must list the letters in order of their first appearance in the original string.

*/

const getStrings = c => {
  let res = '';
  let occurrence = c.replace(/\s/g,'').split('').map(a => a.toLowerCase()).reduce((a, b) => {
    if (!a[b]) {
      a[b] = 1;
    } else {
      a[b]++;
    }
    return a;
  }, {});
  for (let v = 0; v < Object.values(occurrence).length; v++) {
    let value = '*'.repeat(Object.values(occurrence)[v]);
    let key = Object.keys(occurrence)[v];
    if (v !== Object.values(occurrence).length - 1) {
      res += `${key}:${value},`;
    } else {
      res += `${key}:${value}`;
    }
  }
  return res;
};

console.log(getStrings("Las Vegas"));