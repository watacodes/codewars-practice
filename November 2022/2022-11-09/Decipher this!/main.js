/*

Codewars, 6k: Decipher this!

*/

const decipherThis = str => {
  let convertFirst = str.replace(/\d+/g, (a) => String.fromCharCode(a*1)).split(' ');
  return convertFirst.map(a => a.length > 2 
                   ? a.slice(0, 1) + a.slice(-1) + a.slice(2, -1) + a.slice(1, 2) 
                   : a).join(' ');
};

