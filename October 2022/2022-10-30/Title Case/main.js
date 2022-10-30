/*

Codewars, 6k: Title Case


*/

const titleCase = (title, minor) => {
  if (title.length === 0) return '';
  let titleToLower = title.toLowerCase().split(' ');
  if (!minor) {
    return titleToLower.map(a => a[0].toUpperCase() + a.slice(1)).join(' ');
  } else {
    let minors = minor.toLowerCase().split(' ');
    return title.toLowerCase().split(' ').map((a, i) => !minors.includes(a) || a.length === 1 || i === 0 ? a[0].toUpperCase() + a.slice(1) : a).join(' ');
  }
};

console.log(titleCase(''))