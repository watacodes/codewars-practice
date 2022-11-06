/*

Codewars, 6k: Street Fighter 2 - Character Selection

*/

function streetFighterSelection(fighters, position, moves){
  let selectedChamps = [];
  let currPos = position;
    
  for (let i of moves) {
    if (i === 'up') {
      if (currPos[0] !== 0) {
        currPos[0]--;
      }
      selectedChamps.push(fighters[currPos[0]][currPos[1]]);
    };
    
    if (i === 'down') {
      if (currPos[0] !== 1) {
        currPos[0]++;
      }
      selectedChamps.push(fighters[currPos[0]][currPos[1]]);
    };
    
    if (i === 'left') {
      if (currPos[1] === 0) {
        currPos[1] = fighters[0].length - 1;
        selectedChamps.push(fighters[currPos[0]][currPos[1]])
      } else {
        currPos[1]--;
        selectedChamps.push(fighters[currPos[0]][currPos[1]])
      }
    };
    
    if (i === 'right') {
      if (currPos[1] === fighters[0].length - 1) {
        currPos[1] = 0;
        selectedChamps.push(fighters[currPos[0]][currPos[1]])
      } else {
        currPos[1]++;
        selectedChamps.push(fighters[currPos[0]][currPos[1]])
      }
    };
  };
  return selectedChamps;
};