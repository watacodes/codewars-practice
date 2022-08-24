/*

Codewars, 8k: Help the Elite Squad of Brazilian forces BOPE

The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

PT92 - 17 bullets
M4A1 - 30 bullets
M16A2 - 30 bullets
PSG1 - 5 bullets

Example:

["PT92", 6] => 2 (6 streets 3 bullets each)
["M4A1", 6] => 1

The return Will always be an integer so as the params.

*/

const magNumber = param => {
  let nOfB = param[1] * 3;
  console.log(param[0], param[1]);
  if (param[0] === 'PT92') {
    if (nOfB < 17) {
      return 1;
    } else {
      return Math.ceil(nOfB / 17);
    }
  } else if (param[0] === 'M4A1' || param[0] === 'M16A2') {
    if (nOfB < 30) {
      return 1;
    } else {
      return Math.ceil(nOfB / 30);
    }
  } else if (param[0] === 'PSG1') {
    if (nOfB < 5) {
      return 1;
    } else {
      return Math.ceil(nOfB / 5);
    }
  }
}