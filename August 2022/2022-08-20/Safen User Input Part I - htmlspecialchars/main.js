/*

Codewars, 8k: Safen User Input Part I - htmlspecialchars

Mission
Your mission is to implement a function that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;

*/

const htmlspecialchars = d => {
  let arr = d.split('');
  let emp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '<') {
      emp.push('&lt;');
    } else if (arr[i] === '>') {
      emp.push('&gt;');
    } else if (arr[i] === '"') {
      emp.push('&quot;');
    } else if (arr[i] === '&') {
      emp.push('&amp;');
    } else {
      emp.push(arr[i]);
    }
  }
  return emp.join('');
}

console.log(htmlspecialchars("<h2>Hello World</h2>"));