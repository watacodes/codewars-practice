/*

Codewars, 6k: I'm longer than you!

*/

const longer = s => s.split(' ').sort((a, b) => a.length - b.length || b < a).join(' ');