/*

Codewars, 5k: Advanced Pig Latin

*/

function translate(str) {
  return str.replace(/([^\Waiueo]*)(\w+)/gi, (e, p1, p2) => {
      let temp = `${p2}${p1 || 'w'}ay`;
      return /[A-Z]/.test(p1) ? temp.charAt(0).toUpperCase() + temp.slice(1).toLowerCase() : temp; 
    });
};