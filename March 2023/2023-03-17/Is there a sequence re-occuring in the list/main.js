/*

Codewars, 6k: Is there a sequence re-occuring in the list

*/

const sortArr = arr => {
  if (arr.some(e => typeof e === 'string')) {
    return arr.sort();
  } else {
    return arr.sort((a, b) => a - b);
  }
}

function isReoccuring(arr) {
  let appeared = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (!appeared.includes(arr[i])) {
      appeared.push(arr[i]);
    } else if (arr[i-1] !== arr[i]) {
      appeared.push(arr[i]);
    }
  }

  
  appeared = sortArr(appeared);
  
  const onlyUnique = [...new Set(appeared)];
  
  return onlyUnique.length !== appeared.length;
}