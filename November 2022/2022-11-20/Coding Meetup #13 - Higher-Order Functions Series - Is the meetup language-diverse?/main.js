/*

Codewars, 6k: Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?

*/

const isLanguageDiverse = obj => {
  const languageArr = obj.map(a => a.language);
  const resObj = {};
  languageArr.map(a => resObj[a] = resObj[a] ? resObj[a] + 1 : 1);
  const count = Object.values(resObj).sort((a, b) => b - a);
  const max = count.slice(0, 1);
  return count.every(c => c * 2 >= max);
}

const list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];

console.log(isLanguageDiverse(list1));