/*

Codewars, 7k: Replace all items


*/

const replaceAll = (seq, find, replace) => {
  return Array.isArray(seq) ? 
    seq.map(item => item === find ? replace : item) :
    seq.split('')
       .map(item => item === find ? replace : item)
       .join('');
};

console.log(replaceAll([1,2,2], 1, 2));