/*

Codewars, 7k: Hide password from jdbc url

*/

function hidePasswordFromConnection(url){
  return url.replace(/password=([^&]*)/, (e, i) => `password=${'*'.repeat(i.length)}`);
}