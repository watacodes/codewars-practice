/*

Codewars, 7k: String Reordering

*/

const sentence = arr => {
  const sortedArrayOfObjects = arr.sort((a, b) => Object.keys(a) - Object.keys(b));
  return sortedArrayOfObjects.map(a => a[Object.keys(a)[0]]).join(' ');
}


const testList = [
  {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
  {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
 ];


console.log(sentence(testList))
