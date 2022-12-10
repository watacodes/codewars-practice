/*

Codewars, 7k: Zebulan's Nightmare

*/

const zebulansNightmare = str => {
  const strArr = str.split('_');
  return strArr.map((num, i) => i !== 0 ? num[0].toUpperCase() + num.slice(1) : num).join('');
}