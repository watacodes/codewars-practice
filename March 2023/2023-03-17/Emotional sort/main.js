/*

Codewars, 6k: Emotional Sort

*/

function sortEmotions(arr, order) {
  if (!arr.length) return [];

  let emojis =  [':D', ':)', ':|', ':(', 'T_T'];
  
  if (!order) {
    emojis = emojis.reverse();
  }

  return arr.sort((a, b) => emojis.indexOf(a) - emojis.indexOf(b));
}