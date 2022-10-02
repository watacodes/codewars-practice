/*

Codewars, 7k: Initialize my name

Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

*/

const initializeNames = n => {
  let nameArr = n.split(' ');
  if (nameArr.length < 3) return n;
  return nameArr.map((a, i) => i !== 0 && i !== nameArr.length - 1 ? a.slice(0, 1) + '.' : a).join(' ');
}

console.log(initializeNames('Lois Mary Lane'))