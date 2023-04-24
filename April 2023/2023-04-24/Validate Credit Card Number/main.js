/*

Codewars, 6k: Validate Credit Card Number

*/


function validate(n) {
  const nArr = [...n.toString()];
  let temp = [];
  
  if (nArr.length % 2) {
    temp = nArr.map((e, i) => i % 2 ? +e * 2 : +e);  
  } else {
    temp = nArr.map((e, i) => i % 2 === 0 ? +e * 2 : +e);
  }

  temp = temp.map(e => +e > 9 ? [...e.toString()].reduce((acc, curr) => +acc + +curr) : +e);
  
  return temp.reduce((acc, curr) => acc + curr, 0) % 10 === 0;
};