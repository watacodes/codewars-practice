/*

Codewars, 6k: bread sandwiches

*/

function slicesToName(n) {
  if (!n || n <= 1 || typeof n !== 'number') return null;
  
  let res = ''
 
  while (n % 2) {
    n -= 3;
    res += 'bread sandwich';
  }
  
  res += ' sandwich'.repeat(n / 2);
  return res.trim();
}

function nameToSlices(name) {
  if (!name || typeof name !== 'string' || name === 'bread') return null;
  const nameArr = name.split(' ');
  let counter = 0;
  
  if (nameArr[0] === 'bread') {
    counter++;
    nameArr.shift();
  }
  
  for (let i = 0; i < nameArr.length; i++) {
    if (nameArr[i] !== 'sandwich') return null;
    counter += 2;
  }
  
  return counter === 1 ? null : counter;
}