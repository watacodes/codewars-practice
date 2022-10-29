/*

Codewars, 7k: Cat Years, Dog Years (2)

*/

const ownedCatAndDog = (catYears, dogYears) => {
  
  if (catYears < 15) {
    catYears = 0;
  }
  
  if (dogYears < 15) {
    dogYears = 0;
  }
  
  if (catYears >= 15 && catYears < 24) {
    catYears = 1;
  }

  if (dogYears >= 15 && dogYears < 24) {
    dogYears = 1;
  }

  if (catYears >= 24 && catYears <= 28) {
    catYears = 2;
  }

  if (dogYears >= 24 && dogYears <= 28) {
    dogYears = 2;
  }

  if (catYears > 24) {
    catYears = Math.floor((catYears - 24) / 4) + 2;
  }

  if (dogYears > 24) {
    dogYears = Math.floor((dogYears - 24) / 5) + 2;
  }

  return [catYears, dogYears];
};