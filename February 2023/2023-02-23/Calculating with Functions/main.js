/*

Codewars, 5k: Calculating with Functions

*/

function zero(n) { return n ? n(0) : 0 }
function one(n) { return n ? n(1) : 1 }
function two(n) { return n ? n(2) : 2 }
function three(n) { return n ? n(3) : 3 }
function four(n) { return n ? n(4) : 4 }
function five(n) { return n ? n(5) : 5 }
function six(n) { return n ? n(6) : 6 }
function seven(n) { return n ? n(7) : 7 }
function eight(n) { return n ? n(8) : 8 }
function nine(n) { return n ? n(9) : 9 }

function plus(n) { 
  return function(e) { 
    return n + e 
  }
}

function minus(n) {
  return function(e) {
    console.log(n, e)
    return e - n;
  }
}

function times(n) {
  return function(e) {
    return n * e;
  }
}

function dividedBy(n) {
  return function(e) {
    return Math.floor(e / n);
  }
}