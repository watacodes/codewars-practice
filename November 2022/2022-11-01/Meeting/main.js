/*

Codewars, 6k: Meeting


*/

const meeting = s => {
  const strArray = s.split(';').map(name => name.toUpperCase().split(':'));
  const sortedArray = strArray.sort((a, b) => a[1].localeCompare(b[1]) || a[0].localeCompare(b[0]))
  let res = '';
  sortedArray.forEach(a => res += `(${a[1]}, ${a[0]})`);
  return res;
};




console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));