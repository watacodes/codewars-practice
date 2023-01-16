/*

Codewars, 7k: Simple Fun #320: Scratch lottery I

*/

function scratch(lottery) {
  const mapped = lottery.map(anim => {
    const splitAnimal = anim.split(' ').slice(0, 3);
    const animal = splitAnimal[0];
    return splitAnimal.every(e => e === animal) ? anim.split(' ').pop() : 0;
  });
  return mapped.reduce((acc, curr) => acc + +curr, 0);
}