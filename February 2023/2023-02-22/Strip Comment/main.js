/*

Codewars, 4k: Strip Comments

*/

function solution(input, markers) {
  const lines = input.split('\n');
  const stripped = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    for (let k = 0; k < markers.length; k++) {
      let idx = line.indexOf(markers[k]);
      if (idx !== -1) {
        line = line.slice(0, idx).trim();
        break;
      }
    }
    stripped.push(line);
  }
  return stripped.join('\n');
}

console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges"))
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne"));