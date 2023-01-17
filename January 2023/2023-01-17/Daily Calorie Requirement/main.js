/*

Codewars, 7k: Daily Calorie Requirement 

*/

function calorie(member) {
  const multiplier = {
    'little activity': 1.2,
    'moderately active': 1.55,
    'very active': 1.7,
    'extremely active': 1.9,
  }
  
  const baseRMR = (10 * member[4] + 6.25 * member[3] - 5 * member[2]);
  
  if (member[1] === 'm') {
    const maleRequiredCal = Math.round((baseRMR + 5) * multiplier[member[5]] * 100) / 100;
    return `${member[0]}´s daily calorie requirement is ${Number.isInteger(maleRequiredCal) ? maleRequiredCal.toFixed(2) : maleRequiredCal} kcal.`;
  } else {
    const femaleRequiredCal = Math.round((baseRMR - 161) * multiplier[member[5]] * 100) / 100;
    return `${member[0]}´s daily calorie requirement is ${Number.isInteger(femaleRequiredCal) ? femaleRequiredCal.toFixed(2) : femaleRequiredCal} kcal.`;
  }
}