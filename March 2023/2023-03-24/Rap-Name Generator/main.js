/*

Codewars, 7k: Rap-Name Generator

*/

function rapNameGen(dob) {
  const nums = {
    '1': '1ne',
    '2': '2wo',
    '3': '3hree',
    '4': '4our',
    '5': '5ive',
    '6': '6ix',
    '7': '7even',
    '8': '8ight',
    '9': '9ine',
    '0': '0ero',
  };

  const day = Math.ceil([...dob.split('.')[0]].reduce((acc, curr) => +acc + +curr) / 2);
  const year = Math.ceil([...dob.split('.')[2]].reduce((acc, curr) => +acc + +curr) / 2);
  
  return `${nums[day]} ${nums[year]}`;
};