/*

Codewars, 7k: The Ladies of ENIAC

To keep: only alpha characters, space characters and exclamation marks.
To remove: numbers and these characters: %$&/£?@

*/

const radLadies = name => {
  return name.replace(/\d|[%$&/£?@]/g, '').toUpperCase();
}

console.log(radLadies("k?%35a&&/y@@@£5599 m93753&$$$c$n///79u??@@%l?975$t?%5y%&$3$1!"))