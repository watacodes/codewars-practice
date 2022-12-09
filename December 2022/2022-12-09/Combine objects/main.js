/*

Codewars, 7k: Combine objects

*/

const combine = (...arr) => {
  let resObj = {};
  
  for (let k = 0; k < arr.length; k++) {
    for (let i in Object.keys(arr[k])) {
      if (!resObj[Object.keys(arr[k])[i]]) {
        resObj[Object.keys(arr[k])[i]] = Object.values(arr[k])[i];
      } else {
        resObj[Object.keys(arr[k])[i]] += Object.values(arr[k])[i];
      }
    } 
  }
  return resObj;
}