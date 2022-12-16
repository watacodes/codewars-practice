/*

Codewars, 7k: Simple Fun #40: Timed Reading

*/

const timedReading = (maxLength, str) => str.split(' ').filter(w => w.replace(/[^a-z]/gi, '').length !== 0 && w.replace(/[^a-z]/gi, '').length <= maxLength).length;