/*

Codewars, 6k: Monosyllabic Oragoo

*/

function oragoo(str) {
  if (!/[aiueoy]/i.test(str)) return str;
  return /^y/i.test(str) ? str.replace(/(?=[aiueo])/i, 'orag') : str.replace(/(?=[aiueoy])/i, 'orag');
}