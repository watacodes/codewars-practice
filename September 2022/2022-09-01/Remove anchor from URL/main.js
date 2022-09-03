/*

Codewars, 7k: Remove anchor from URL

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

*/

const removeUrlAnchor = url => url.split('#')[0];

console.log(removeUrlAnchor("www.codewars.com#about"))