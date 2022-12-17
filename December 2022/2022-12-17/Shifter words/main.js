/*

Codewars, 7k: Shifter words

*/

const shifter = str => {
  const pattern = ["H", "M", "W", "I", "N", "O", "S", "X", "Z"];
  const strArr = str.split(' ');
  if (str.length === 0) return 0;
  let counter = 0;
  const unique = strArr.reduce((acc, curr) => {
    if ([...curr].every(a => pattern.includes(a))) {
      if (!acc.includes(curr)) {
        counter++;
        acc.push(curr);
      }
    }
    return acc;
  }, []);
  return counter;
}