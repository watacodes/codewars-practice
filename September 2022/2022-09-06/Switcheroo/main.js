/*

Codewars, 7k: Switcheroo

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

*/

const switcheroo = x => x.split('').map(a => a !== 'c' && a === 'a' ? 'b' : a !== 'c' && a === 'b' ? 'a' : 'c').join('');

console.log(switcheroo('aabacbaa'));