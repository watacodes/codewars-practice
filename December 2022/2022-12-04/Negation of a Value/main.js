/*

Codewars, 7k: Negation of a Value

*/

const negationValue = (str, val) => {
  return str.length % 2 ? !val : !!val;
}



console.log(negationValue('!', false));