/*

Codewars, 7k: Suzuki needs help lining up his students!

*/

const lineupStudents = list => {
  return list.split(' ').sort((a, b) => a.length === b.length ? b.localeCompare(a) : b.length - a.length);
};

console.log(lineupStudents("xxa xxb xxc xxd xa xb xc xd"))