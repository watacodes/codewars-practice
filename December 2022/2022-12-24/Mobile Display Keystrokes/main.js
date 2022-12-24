/*

Codewars, 7k: Mobile Display Keystrokes

*/

const mobileKeyboard = str => {
  const keys = [
    '1',
    '2abc',
    '3def',
    '4ghi',
    '5jkl',
    '6mno',
    '7pqrs',
    '8tuv',
    '9wxyz',
    '*',
    '0',
    '#',
  ];
  return [...str].map(l => keys.find(a => a.includes(l)).indexOf(l) + 1)
                 .reduce((acc, curr) => acc + curr, 0);
}
