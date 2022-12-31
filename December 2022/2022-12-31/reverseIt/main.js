/*

Codewars, 7k: reverseIt

*/

const reverseIt = data => {
  if (typeof data === 'string') {
    return [...data].reverse().join('');
  }
  if (typeof data === 'number') {
    return Number([...data.toString()].reverse().join(''));
  }
  return data;
}