/*

Codewars, 6k: Format phone number by template

*/

function formatNumber(number, template) {
  for (const n of number.toString()) {
    template = template.replace('#', n);
  }
  return template.includes('#') && 'Invalid phone number' || template;
};