/*

Codewars, 7k: Will you survive the zombie onslaught?

*/

const zombieShootout = (zombies, range, ammo) => {
  const distance = range * 2;
  
  if (ammo < distance && zombies > ammo) {
    return `You shot ${ammo} zombies before being eaten: ran out of ammo.`;
  }
  
  if (zombies > distance) {
    return `You shot ${distance} zombies before being eaten: overwhelmed.`;
  }
  
  return `You shot all ${zombies} zombies.`;
}

console.log(zombieShootout(100, 8, 200))