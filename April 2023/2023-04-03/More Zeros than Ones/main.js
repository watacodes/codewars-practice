/*

Codewars, 6k: More Zeros than Ones

*/

function moreZeros(s){
  const strToBin = [...new Set(s)].map(e => e.charCodeAt().toString(2));
  return strToBin.filter(e => (e.match(/[0]/g) || []).length > (e.match(/[1]/g) || []).length)
                 .map(e => String.fromCharCode(parseInt(e, 2)));
};