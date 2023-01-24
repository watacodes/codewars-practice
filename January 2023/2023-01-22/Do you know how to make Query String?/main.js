/*

Codewars, 7k: Do you know how to make Query String?

*/

function toQueryString (obj) {
  const res = [];
  for (let i of Object.keys(obj)) {
    let currentVal = obj[i];
    if (Array.isArray(currentVal)) {
      currentVal.forEach(e => res.push(i + '=' + e));
    } else {
      res.push(i + '=' + currentVal);
    }
  }
  return res.join('&');
}