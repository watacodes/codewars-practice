/*

Codewars, 7k: Do you speak retsec?

*/

const reverseByCenter = str => {
  if (str.length % 2 === 0) {
    return str.slice(str.length / 2) + str.slice(0, str.length / 2);
  } else {
    return str.slice(Math.ceil(str.length / 2)) + str.slice(Math.floor(str.length / 2), Math.ceil(str.length / 2)) + str.slice(0, Math.floor(str.length / 2));
  }
}