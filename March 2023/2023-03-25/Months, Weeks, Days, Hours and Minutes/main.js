/*

Codewars, 7k: Months, Weeks, Days, Hours and Minutes

*/

function displayValue(value) {
  const res = [`${value / 60 / 24 / 7 / 4 | 0} month`,
               `${value / 60 / 24 / 7 % 4 | 0} week`,
               `${value / 60 / 24 % 7 | 0} day`,
               `${value / 60 % 24 | 0} hour`,
               `${value % 60} minute`];
  return res.filter(e => !/^[0]/.test(e)).map(e => /^(1 )/.test(e) ? e : e + 's').join(' ');
};
