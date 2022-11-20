/*

Codewars, 7k: Coding Meetup #17 - Higher-Order Functions Series - Sort by programming language

*/

const sortByLanguage = list => {
  return list.sort((a, b) => a.language === b.language ? a.firstName.localeCompare(b.firstName) : a.language.localeCompare(b.language));
}