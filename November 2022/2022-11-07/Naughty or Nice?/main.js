/*

Codewars, 7k: Naughty or Nice?


*/

function getNiceNames(people){
  const goodChildren = people.filter(person => person.wasNice);
  let arr = [];
  for (let i in goodChildren) {
    arr.push(goodChildren[i].name);
  };
  return arr.filter(a => a);
};

function getNaughtyNames(people){
  const notNaughty = people.filter(person => !person.wasNice);
  let arr = [];
  for (let i in notNaughty) {
    arr.push(notNaughty[i].name);
  };
  return arr.filter(a => a);
};