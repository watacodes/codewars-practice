/*

Codewars, 7k: Write out expression!

*/

const expressionOut = expr => {
  const operators = {
    "+": "Plus",
    "-": "Minus",
    "*": "Times",
    "/": "Divided By",
    "**": "To The Power Of",
    "=": "Equals",
    "!=": "Does Not Equal"
  }

  const numbers = {
    '0': 'Zero',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
    '10': 'Ten',
  }

  const exprArr = expr.split(' ')
  const operator = expr.replace(/\d/g, '').trim();
  return !operators[operator] ? 'That\'s not an operator!' : `${numbers[exprArr[0]]} ${operators[operator]} ${numbers[exprArr[2]]}`;
}