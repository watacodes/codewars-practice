/*

Codewars, 7k: Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer


*/
var list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

const findSenior = arr => {
  const ageArr = arr.map(a => a.age)
  const oldestArr = [];
  for (let i = 0; i < ageArr.length; i++) {
    if (ageArr[i] === Math.max(...ageArr)) {
      oldestArr.push(i);
    }
  }
  return arr.filter((a, i) => oldestArr.includes(i));
}

console.log(findSenior(list1));