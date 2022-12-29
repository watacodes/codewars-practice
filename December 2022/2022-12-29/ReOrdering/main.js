/*

Codewars, 7k: ReOrdering

*/

const reOrdering = text => {
  const textArr = text.split(' ');
  return textArr.filter(t => t[0] === t[0].toUpperCase()).concat(textArr.filter(a => a[0] !== a[0].toUpperCase())).join(' '); 
}