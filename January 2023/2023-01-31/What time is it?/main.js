/*

Codewars, 7k: What time is it?

*/

const getMilitaryTime = (input) => {
  const ampm = input.slice(-2);
  if (ampm === 'PM' && input.slice(0, 2) != 12) {
    const hours = Number(input.slice(0, 2)) + 12;
    return hours + input.slice(2, -2);
  } else if (ampm === 'PM' && input.slice(0, 2) != 12 || ampm === 'AM' && input.slice(0, 2) == 12) {
    return '00' + input.slice(2, -2);
  } else {
    return input.slice(0, -2);
  }
}; 