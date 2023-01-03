/*

Codewars, 7k: Who Took The Car Key?

*/

const whoTookTheCarKey = message => message.map(n => String.fromCharCode(parseInt(n, 2))).join('');