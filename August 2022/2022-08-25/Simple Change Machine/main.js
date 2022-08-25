/*

Codewars, 8k: Simple Change Machine

Your task is to create a change machine.

The machine accepts a range of specified coins and notes, it returns change in 20p and 10p coins in the minimum amount of pieces. A 50p for example would return two 20p pieces and one 10p piece. The machine will always try and return change, if you input a 20p for example it will return "10p 10p".

The machine accepts these coins and notes: £5, £2, £1, 50p, 20p. Any coins and notes which are not accepted by the machine will be returned. If you were to put a £20 note into the machine for example, it would be returned to you and not broken into change.

This change machine is programmed to accept and distribute strings rather than numbers. The change will be returned as one string with the change separated by single spaces & no commas. The values of the string will be descending.

*/

const changeMe = m => {
  let res = '';
  let twenty = '20p';
  let ten = '10p';

  if (m === '£5') {
    for (let i = 0; i < 24; i++) {
      res += twenty + ' ';
    }
    res += twenty;
    return res;
  } else if (m === '£2') {
    for (let i = 0; i < 9; i++) {
      res += twenty + ' ';
    }
    res += twenty;
    return res;
  } else if (m === '£1') {
    for (let i = 0; i < 4; i++) {
      res += twenty + ' ';
    }
    res += twenty;
    return res;
  } else if (m === '50p') {
    for (let i = 0; i < 2; i++) {
      res += twenty + ' ';
    }
    res += ten;
    return res;
  } else if (m === '20p') {
    res += ten + ' ' + ten;
    return res;
  } 
  return m;
}