/*

Codewars, 5k: The Road-Kill Detective

*/

const roadKill = photo => {
  photo = photo.replace(/[=*]/g, '');
  console.log(photo)
  const findAnimal = ANIMALS.find(e => {
    const regex = new RegExp(`^${e.replace(/./g, (t) => t + '+')}$`);
    console.log(regex, e)
    return regex.test(photo) || regex.test([...photo].reverse().join(''));
  });
  return findAnimal || '??';
}