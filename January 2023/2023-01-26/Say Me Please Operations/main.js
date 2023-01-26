/*

Codewars, 7k: Say Me Please Operations

*/

function sayMeOperations(str) {
  const numArr = str.split(' ').map(e => +e);
  const operation = [];
  for (let i = 0; i < numArr.length - 2; i++) {
    if (numArr[i] + numArr[i+1] === numArr[i+2]) {
      operation.push('addition');
    } else if (numArr[i] - numArr[i+1] === numArr[i+2]) {
      operation.push('subtraction');
    } else if (numArr[i] * numArr[i+1] === numArr[i+2]) {
      operation.push('multiplication');
    } else {
      operation.push('division');
    }
  }
  return operation.join(', ');
}