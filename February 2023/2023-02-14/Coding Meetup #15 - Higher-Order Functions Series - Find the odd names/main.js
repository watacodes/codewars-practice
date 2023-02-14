/*

Codewars, 6k: Coding Meetup #15 - Higher-Order Functions Series - Find the odd names

*/


//

function findOddNames(list) {
  return list.filter(user => ([...user.firstName].reduce((acc, curr) => acc + curr.charCodeAt(), 0)) % 2);
}