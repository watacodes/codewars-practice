/*

Codewars, 6k: Process Waterfowl Survey Data Results

*/

function createReport(arr) {
  if (arr.some(e => e.split(' ')[0] === 'Labrador')) return ['Disqualified data'];
  
  const getCode = (name) => {
    const parts = name.split(/[\s-]+/);
    let code = "";

    switch (parts.length) {
      case 1:
        code = parts[0].slice(0, 6);
        break;
      case 2:
        code = parts[0].slice(0, 3) + parts[1].slice(0, 3);
        break;
      case 3:
        code = parts[0].slice(0, 2) + parts[1].slice(0, 2) + parts[2].slice(0, 2);
        break;
      case 4:
        code = parts[0].slice(0, 1) + parts[1].slice(0, 1) + parts[2].slice(0, 2) + parts[3].slice(0, 2);
    }
    return code.toUpperCase();
  };
  
  const occurrence = arr.reduce((acc, curr) => {
    const [name, num] = curr.split(/\s+(?=\d)/);
    const code = getCode(name);
    if (!acc[code]) {
      acc[code] = +num;
    } else {
      acc[code] += +num;
    }
    return acc;
  }, {});
  
  const entries = Object.entries(occurrence);
  console.log(entries)
  return [].concat(...entries.sort((a, b) => a[0].localeCompare(b[0])));
}