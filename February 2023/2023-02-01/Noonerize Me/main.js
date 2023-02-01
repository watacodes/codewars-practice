/*

Codewars, 7k: Noonerize Me

*/

function noonerize(numbers) {
  return numbers.some(e => typeof e !== 'number') 
        ? 'invalid array'
        : Math.abs([String(numbers[1])[0] + String(numbers[0]).slice(1), String(numbers[0])[0] + String(numbers[1]).slice(1)]
              .reduce((acc, curr) => +acc - +curr))
}