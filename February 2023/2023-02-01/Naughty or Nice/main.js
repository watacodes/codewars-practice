/*

Codewars, 7k: Naughty or Nice

*/

function naughtyOrNice(data) {
  const occurrence = {
    'Naughty': 0,
    'Nice': 0
  }
  
  for (let month in data) {
    for (let day in data[month]) {
      occurrence[data[month][day]]++;
    }
  }
  
  return occurrence['Naughty'] > occurrence['Nice'] ? 'Naughty!' : 'Nice!';
}