/*

Codewars, 6k: Biggest Number (with Strings)

*/

function biggestNum(a, b) {
  if (+a === +b) return +a.slice(-1) > +b.slice(-1) ? a : b;
  return +a.replace(/--/g, '').replace(/\+/g, '') > +b.replace(/--/g, '').replace(/\+/g, '') ?
          a.replace(/--/g, '').replace(/\+/g, '').replace(/^(-)?0+/, '$1') :
          b.replace(/--/g, '').replace(/\+/g, '').replace(/^(-)?0+/, '$1');
}