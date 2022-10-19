/*

Codewars, 6k: Count the smiley faces!


*/

const countSmileys = arr => {
  let regex = /(:|;)(-|~)?(\)|D)/g;
  return arr.filter(face => face.match(regex)).length;
};

console.log(countSmileys([':)', ';(', ';}', ':-D']))