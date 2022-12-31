/*

Codewars, 7k: Is that a real phone number? (British version)

*/

const validateNumber = str => {
  let onlyDigits = [...str].map(a => a === '-' ? '' : a).join('');
  if (str.slice(0, 3) === '+44') {
    onlyDigits = '0' + [...onlyDigits].slice(3).join('');
  }
  const regex = /^07\d{9}$/;
  return regex.test(onlyDigits) ? 'In with a chance' : 'Plenty more fish in the sea';
}