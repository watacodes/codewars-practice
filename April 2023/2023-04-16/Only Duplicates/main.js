/*

Codewars, 6k: Only Duplicates

*/

function onlyDuplicates(str) {
  const seen = [...str].reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  
  const unique = [];
  
  for (const l of Object.keys(seen)) {
    if (seen[l] === 1) unique.push(l);
  }
  
  unique.forEach(e => {
    const re = new RegExp(`${e}`, 'g');
    str = str.replace(re, '');
  });
  
  return str;
};