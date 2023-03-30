/*

Codewars, 6k: Common Data Type

*/

class CommonDatatypes {
  
  check(arr) {
    const occurrence = arr.reduce((acc, curr) => {
      if (!acc[typeof curr]) {
        acc[typeof curr] = 1;
      } else {
        acc[typeof curr]++;
      }
      return acc;
    }, {});
    
    const descending = Object.entries(occurrence).sort((a, b) => b[1] - a[1]);
    const max = descending[0][1];
    const filtered = descending.filter(e => e[1] === max);
    return filtered.length > 1 ? 'We got a tie!' : filtered[0][0];
  }
}