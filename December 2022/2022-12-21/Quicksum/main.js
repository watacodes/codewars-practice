/*

Codewars, 7k: Quicksum

*/

const quicksum = packet => {
  const alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const regex = /[^A-Z ]/g;
  if (regex.test(packet)) return 0;
  const onlyValid = packet.replace(regex, '');
  let sum = 0;
  for (let i = 0; i < onlyValid.length; i++) {
    sum += (i + 1) * alphabet.indexOf(onlyValid[i]);
  }
  return sum;
}