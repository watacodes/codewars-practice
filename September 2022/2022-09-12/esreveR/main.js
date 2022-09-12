/*

Codewars, 7k: esreveR

Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)

*/

const reverse = arr => {
  let emp = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    emp.push(arr[i]);
  }
  return emp;
};


console.log(reverse([1,null,14,"two"]))