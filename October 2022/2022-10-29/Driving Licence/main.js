/*

Codewars, 7k: Driving Licence


*/

function driver(data) {
  let res = '';
  if (data[2].length < 5) {
    res += data[2].toUpperCase() + '9'.repeat(5 - data[2].length);
  } else {
    res += data[2].toUpperCase().slice(0, 5);
  }
  
  let dob = new Date(data[3]);
  res += data[3].slice(-2, -1);
  res += ('0' + (dob.getMonth() + (data[4] === 'M' ? 1 : 51))).slice(-2);
  res += ('0' + dob.getDate()).slice(-2);
  res += data[3].slice(-1);
  res += data[0].slice(0, 1) + (data[1] + '9').slice(0, 1);
  res += '9AA';
  return res;

}
