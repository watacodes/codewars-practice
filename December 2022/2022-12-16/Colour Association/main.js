/*

Codewars, 7k: Colour Association

*/

const colourAssociation = arr => {
  const arrOfObj= [];
  arr.forEach(e => {
    let obj = {};
    obj[e[0]] = e[1];
    arrOfObj.push(obj);
  });
  return arrOfObj;
}