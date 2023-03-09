/* 

Codewars, 6k: Canal Management

*/

function canalMania(lowQ, highQ, lockLength) {
  let counter = 0;
  
  while (lowQ.length || highQ.length) {
    let temp = 0;
    
    while (lowQ.length && lowQ[0] + temp <= lockLength) {
      temp += lowQ.shift();
    }
    
    counter += temp * 2 + 2;
    temp = 0;
    
    while (highQ.length && highQ[0] + temp <= lockLength) {
      temp += highQ.shift();
    }
    
    counter += temp * 2 + 2;
    
  }
  
  return counter;
}