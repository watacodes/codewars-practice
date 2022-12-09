/*

Codewars, 7k: Cat and Mouse - 2D Version

*/

const catMouse = (map, moves) => {
  const mapArr = map.split('\n');  
  if (!map.includes('C') || !map.includes('m')) return 'boring without two animals';

  const catRowIdx = mapArr.findIndex(a => a.includes('C'));
  const catColIdx = mapArr[catRowIdx].indexOf('C');
  
  const mouseRowIdx = mapArr.findIndex(a => a.includes('m'));
  const mouseColIdx = mapArr[mouseRowIdx].indexOf('m');
  
  return (mouseColIdx - catColIdx) + (mouseRowIdx - catRowIdx) <= moves ? 'Caught!' : 'Escaped!'; 
}