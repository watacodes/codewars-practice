/*

Codewars, 6k: Last Survivors Ep.2

*/

function lastSurvivors(str) {
  const regex = /(\w).*?\1/g;
  while (str.match(regex)) {
    str = str.replace(regex, e => {
      if (e[0] === 'z') {
        return 'a' + e.slice(1, -1);
      }
      return String.fromCharCode(e.charCodeAt() + 1) + e.slice(1, -1);
    });
  }
  return str;
}