/*

Codewars, 7k: Ranking position

*/

function ranking(people) {
  const sortedPeople = people.sort((a, b) => b.points - a.points || a.name.localeCompare(b.name));
  const points = [];
  for (const person of sortedPeople) {
    points.push(person.points);
  }
  for (const person of sortedPeople) {
    person.position = points.indexOf(person.points) + 1;
  }
  return sortedPeople;
}