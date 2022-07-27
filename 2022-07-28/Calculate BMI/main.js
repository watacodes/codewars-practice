/*

Codewars 8k: https://www.codewars.com/kata/57a429e253ba3381850000fb

Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

*/

// BMI = w / h ^ 2;

const bmi = (w, h) => {
  let res = w / h ** 2;
  if (res <= 18.5) {
    return "Underweight";
  } else if (res <= 25.0) {
    return "Normal";
  } else if (res <= 30.0) {
    return "Overweight";
  } else if (res > 30) {
    return "Obese";
  }
}

console.log(bmi(80, 1.89));