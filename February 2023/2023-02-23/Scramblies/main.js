/*

Codewars, 5k: Scramblies

*/

function scramble(str1, str2) {
  const occurrence = [...str2].reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  
  [...str1].forEach((e, i) => {
    if (occurrence[e] && occurrence[e] !== 0) {
      occurrence[e]--;
    }
  });
  
  return Object.values(occurrence).every(e => e === 0);
}

console.log(scramble('breaasdfk', 'brkae'));
