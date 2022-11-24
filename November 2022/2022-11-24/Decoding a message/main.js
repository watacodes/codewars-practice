/*

Codewars, 7k: Decoding a message

*/

const decode = message => {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const alphaReversed = [...alpha].reverse();
  return [...message].map(a => !alphaReversed[alpha.indexOf(a)] ? ' ' : alphaReversed[alpha.indexOf(a)]).join('');
}

console.log(decode('r slkv mlylwb wvxlwvh gsrh nvhhztv'))