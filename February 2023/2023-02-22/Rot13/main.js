/*

Codewars, 5k: Rot13

*/

function rot13(message) {
  const msgArr = [...message].map(e => {
    const regex = /[a-z]/i;
    if (regex.test(e)) {
      if (/[A-Z]/.test(e)) {
        return e.charCodeAt() + 13 > 90 ? e.charCodeAt() - 13 : e.charCodeAt() + 13;
      } else {
        return e.charCodeAt() + 13 > 122 ? e.charCodeAt() - 13 : e.charCodeAt() + 13;
      }
    } else { 
      return e;
    }
  });
  return msgArr.map(e => typeof e === 'number' ? String.fromCharCode(e) : e).join('');
}

// console.log('a'.charCodeAt())
// console.log('z'.charCodeAt())
// // console.log('m'.charCodeAt())
// console.log('Z'.charCodeAt())

// console.log(String.fromCharCode(84 - 13))

// console.log('T'.charCodeAt())
// console.log('e'.charCodeAt())
// console.log('s'.charCodeAt())
// console.log('t'.charCodeAt())
// console.log('-===============')
// console.log('G'.charCodeAt())
// console.log('r'.charCodeAt())
// console.log('f'.charCodeAt())
// console.log('g'.charCodeAt())

console.log(rot13('Ruby is cool!'))

