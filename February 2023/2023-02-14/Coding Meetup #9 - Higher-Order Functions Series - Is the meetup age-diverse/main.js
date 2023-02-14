/*

Codewars, 6k: Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?

*/

function isAgeDiverse(list) {
  const ageGroup = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return ageGroup.every(e => list.some(person => e === (person.age > 100 ? 10 : parseInt(person.age / 10))));
}
