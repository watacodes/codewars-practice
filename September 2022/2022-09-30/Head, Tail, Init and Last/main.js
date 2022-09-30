/*

Codewars, 7k: Head, Tail, Init and Last

*/

function head(p) {
  return p[0];
}

function tail(p) {
  return p.slice(1);
}

function init(p) {
  return p.slice(0, p.length - 1);
}

function last(p) {
  return p.pop();
}