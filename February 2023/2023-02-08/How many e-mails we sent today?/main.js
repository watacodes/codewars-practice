/*

Codewars, 7k: How many e-mails we sent today?

*/

function getPercentage(sent, limit = 1000) {
  if (sent === 0) return 'No e-mails sent';
  if (sent >= limit) return 'Daily limit is reached';
  return Math.floor(sent / limit * 100) + '%';
}