/*

Codewars, 8k: Holiday VI - Shark Pontoon


*/
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if (dolphin === true) {
    if (sharkDistance / (sharkSpeed / 2) > pontoonDistance / youSpeed) {
      return 'Alive!';
    } else {
      return 'Shark Bait!';
    }
  } else {
    if (sharkDistance / sharkSpeed > pontoonDistance / youSpeed) {
      return 'Alive!';
    } else {
      return 'Shark Bait!';
    }
  }
}