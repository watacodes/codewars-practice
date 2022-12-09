/*

Codewars, 7k: Alan Partridge I - Partridge Watch

*/

const part = x => {
  const related = ['Partridge', 'PearTree', 'Chat', 'Dan', 'Toblerone', 'Lynn' ,'AlphaPapa', 'Nomad'];
  let counter = 0;
  for (let i of x) {
    if (related.includes(i)) {
      counter++;
    }
  }
  return counter > 0 ? 'Mine\'s a Pint' + '!'.repeat(counter) : 'Lynn, I\'ve pierced my foot on a spike!!';
}
