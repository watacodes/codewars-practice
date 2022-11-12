/*

Codewars, 6k: Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?

Your task is to return:

true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
false otherwise.

*/

const allContinents = list => {
  const continents = {
    Africa: false,
    Americas: false,
    Asia: false,
    Europe: false,
    Oceania: false
  };

  list.forEach(a => continents[a.continent] = true);

  return Object.values(continents).every(a => a);
};

const list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  
]

console.log(allContinents(list1))