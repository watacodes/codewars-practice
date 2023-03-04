/*

Codewars, 5k: Reverse Inside Parentheses (Inside Parentheses)

*/


function reverseInParens(str) {
  const res = [];
  let temp = '';
  
  for (const chunk of str) {
    if (chunk === '(') {
      res.push(`${temp}(`);
      temp = ''
    } else if (chunk === ')') {
      const replaced = temp.replace(/\(|\)/g, (e) => e === '(' ? ')' : '(');
      temp = `${res.pop()}${[...replaced].reverse().join('')})`;
      console.log(temp);
    } else {
      temp += chunk;
    }
  }
  return temp;
}
