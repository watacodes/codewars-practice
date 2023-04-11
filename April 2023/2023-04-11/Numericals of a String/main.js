/*

Codewars, 6k: Numericals of a String

*/

function numericals(s) {
  let res = '';
  
  const seen = [...s].reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;;
    } else {
      acc[curr]++;
    }
    
    res += acc[curr];
    return acc;
  }, {});

  return res;
}