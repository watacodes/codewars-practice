/*

Codewars, 7k: Not all but sometimes all

*/

function remove(str, what) {
  let strArr = [...str];
  for (let key of Object.keys(what)) {
    let currentCount = what[key];
    while (currentCount > 0) {
      if (!strArr.includes(key)) break;
      removeSingleLetter(strArr, key);
      currentCount--;
    }
  }
  return strArr.join('');
}

function removeSingleLetter(arr, target) {
  const idx = arr.indexOf(target);
  arr.splice(idx, 1);
  return arr;
}