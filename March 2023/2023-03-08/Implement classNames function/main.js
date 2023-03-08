/*

Codewars, 6k: Implement classNames function

*/

const cns = (...args) => {
  let cName = '';

  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === 'string' && cName.indexOf(args[i]) === -1) {
      cName += args[i] + ' ';
    } else if (typeof args[i] === 'object' && args[i] !== null) {
      for (let k in args[i]) {
        if (args[i][k] && cName.indexOf(k) === -1) {
          cName += k + ' ';
        }
      }
    }
  }

  return cName.trim().replace(/\s+/g, ' ');
};