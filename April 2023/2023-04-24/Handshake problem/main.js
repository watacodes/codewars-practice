/*

Codewars, 6k: Handshake problem

*/

function getParticipants(handshakes){
  let temp = handshakes;
  let num = 0;
  
  while (temp > 0) {
    temp -= num;
    num++;
  }
  
  return num;
};