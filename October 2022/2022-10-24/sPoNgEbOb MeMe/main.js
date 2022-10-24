/*

Codewars, 7k: sPoNgEbOb MeMe


*/

const spongeMeme = str => {
  return str.split('')
            .map((letter, i) => i % 2 === 0 ?
                                letter.toUpperCase() :
                                letter.toLowerCase())
            .join('');
};

console.log(spongeMeme( "stop Making spongebob Memes!"))