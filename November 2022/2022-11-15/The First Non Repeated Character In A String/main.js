/*

Codewars, 7k: The First Non Repeated Character In A String

*/

const firstNonRepeated = str => {
  for (let i = 0; i < str.length; i++) {
    let letter = str.charAt(i);
    if (str.indexOf(letter) === i && str.indexOf(letter, i + 1) === -1) {
      return letter;
    }
  }
  return null;
}

console.log(firstNonRepeated('test'));