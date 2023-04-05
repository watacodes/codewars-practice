/*

Codewars, 6k: Fat Fingers

*/

const fatFingers = s => {
  if (!s) return s;
  
  let caps = false;
  const res = [...s].reduce((acc, curr) => {
    if (curr.toUpperCase() === 'A') {
      caps = !caps;
      return acc;
    }
    
    if (caps) {
      curr = curr === curr.toUpperCase() ? curr.toLowerCase() : curr.toUpperCase(); 
    }
    
    acc += curr;
    return acc;
  }, '');

  return res;
};