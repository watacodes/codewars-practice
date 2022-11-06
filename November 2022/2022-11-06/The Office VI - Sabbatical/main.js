/*

Codewars, 7k: The Office VI - Sabbatical


*/


const x = 'cat';

const sabb = (str, val, happiness) => {
  const regex = /[abcstil]/g;
  return (str.match(regex) || []).length + val + happiness > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.';
};