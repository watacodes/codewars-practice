/*

Codewars, 6k: Encrypt this!

The first letter => convert to ascii code
The second letter => switch with the last letter

*/

const encryptThis = str => {
  let strArr = str.split(' ');
  return strArr.map(a => {
    if (a.length >= 3) {
      return a.charCodeAt(0) + a.charAt(a.length - 1) + a.slice(2, -1) + a.charAt(1);
    } else if (a.length < 3 && a.length > 1) {
      return a.charCodeAt(0) + a.slice(1);
    } else {
      return a.charCodeAt(0);
    };
  }).join(' ');
};

console.log(encryptThis("A"))

