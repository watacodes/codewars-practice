/*

Codewars, 6k: Decode the Morse code


*/

const decodeMorse = morseCode => {
  MORSE_CODE[''] = ' ';
  let letters = morseCode.replace(/\s{2}/g, ' ').split(' ').map(m => MORSE_CODE[m]).join('').trim();
  return letters;
}