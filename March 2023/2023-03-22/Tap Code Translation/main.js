/*

Codewars, 7k: Tap Code Translation

*/

function tapCodeTranslation(text) {
  const polybius = [
    ['a', 'b', 'c', 'd', 'e'],
    ['f', 'g', 'h', 'i', 'j'],
    ['l', 'm', 'n', 'o', 'p'],
    ['q', 'r', 's', 't', 'u'],
    ['v', 'w', 'x', 'y', 'z'],
  ];
  
   const convertText = [...text].map((letter, i) => {
     if (letter === 'k') return '. ...';
     const rowIdx = polybius.findIndex(e => e.includes(letter));
     const colIdx = polybius[rowIdx].findIndex(e => e === letter);
     return `${'.'.repeat(rowIdx + 1)} ${'.'.repeat(colIdx + 1)}`;
   });
  
  return convertText.join(' ')

};