/*

Codewars, 7k: Composing squared strings

Let us build a new string strng of size (n + 1) x n in the following way:

The first line of strng has the first char of the first line of s1 plus the chars of the last line of s2.
The second line of strng has the first two chars of the second line of s1 plus the chars of the penultimate line of s2 except the last char
and so on until the nth line of strng has the n chars of the nth line of s1 plus the first char of the first line of s2.

abcd    qrst  -->  a3456
efgh    uvwx       efyz1
ijkl    yz12       ijkuv
mnop    3456       mnopq

*/

const compose = (s1, s2) => {
  const s1Arr = s1.split('\n').map((a, i) => a.slice(0, i + 1));
  const s2Arr = s2.split('\n').map((a, i) => a.slice(0, i + 1)).reverse();
  return s1Arr.map((a, i) => a + s2Arr[i]).join('\n').trim();
}

const s1 = "abcd\nefgh\nijkl\nmnop";
const s2 = "qrst\nuvwx\nyz12\n3456"

console.log(compose(s1, s2));