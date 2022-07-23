/*

Codewars questions, 8k: https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'

*/

function toCsvText(array) {
    let result = '';
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            let arrayItem = array[i][j];
            if (j == array[i].length && i == array.length - 1) {
              result += `${arrayItem}`;
            } else if (j == array[i][j].length) {
              result += `${arrayItem}\\n`;
            } else {
              result += `${arrayItem},`;
            }
        }
   }
   return result;
}


console.log(toCsvText([[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    ))