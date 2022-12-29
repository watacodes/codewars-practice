/*

Codewars, 7k: Training JS #37: Unlock new weapon---RegExp Object

*/

const countAnimals = (animals, count) => {
  return count.map((a, i) => {
    let regex = new RegExp(a, 'g');
    return (animals.match(regex) || []).length; 
  });
}