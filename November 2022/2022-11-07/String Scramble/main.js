/*

Codewars, 7k: String Scramble


*/

const scramble = (str, arr) => {
  let strArr = [...str];
  let res = Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    res[arr[i]] = strArr[i];
  };

  return res.join('');
};

console.log(scramble('abcd', [0,3,1,2]))