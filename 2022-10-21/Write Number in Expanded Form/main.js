/*

Codewars, 6k: Write Number in Expanded Form

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

*/

const expandedForm = num => {
  let numString = String(num).split('');
  for (let i = 0; i < numString.length; i++) {
    for (let j = numString.length - i; j > 1; j--) {
      if (numString[i] === '0') {
        i++;
      } else {
        numString[i] += '0';
      }
    }
  }
  return numString.filter(item => item != '0').join(' + ');
}