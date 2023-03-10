/*

Codewars, 7k: Turkish Numbers, 0-99

*/

const getTurkishNumber = num => {
  const turkishNums = {
    '0': 'sıfır',
    '1': 'bir',
    '2': 'iki',
    '3': 'üç',
    '4': 'dört',
    '5': 'beş',
    '6': 'altı',
    '7': 'yedi',
    '8': 'sekiz',
    '9': 'dokuz',
    '10': 'on',
    '20': 'yirmi',
    '30': 'otuz',
    '40': 'kırk',
    '50': 'elli',
    '60': 'altmış',
    '70': 'yetmiş',
    '80': 'seksen',
    '90': 'doksan'
  }
  
  const res = [];
  if (num >= 10 && num % 10 === 0) {
    return turkishNums[num];
  } else if (num >= 10) {
    const ten = String(num)[0];
    const one = String(num)[1];
    res.push(turkishNums[`${ten}0`], turkishNums[one]);
  } else {
    res.push(turkishNums[`${num}`]);
  }
  return res.join(' ');
}