/*

Codewars, 6k: What happened to the vowels?

*/

function wordGenerator(str){
  return [...str.toLowerCase()].reduce((acc, curr) => {
    return [].concat(...acc.map(e => {
      return (/[aiueo]/.test(curr) ? [...'aiueo'] : [curr]).map(s => e + s);
    }))  
  }, ['']).sort();
};