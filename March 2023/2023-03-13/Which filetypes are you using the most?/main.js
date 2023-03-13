/*

Codewars, 6k: Which filetypes are you using the most?

*/

function solve(files) {
  const filesToExt = files.map(file => '.' + file.split('.').slice(-1)[0]);
  const occurrence = filesToExt.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 1;
    } else {
      acc[curr]++;
    }
    return acc;
  }, {});
  const entries = Object.entries(occurrence).sort((a, b) => b[1] - a[1]);
  return entries.filter(file => file[1] === entries[0][1]).map(e => e[0]).sort();
}