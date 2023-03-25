/*

Codewars, 7k: London CityHacker

*/

function londonCityHacker(journey) {
  let fare = 0;
  
  for (let i = 0; i < journey.length; i++) {
    if (typeof journey[i] === 'string') {
      fare += 2.40;
    } else {
      fare += 1.50;
      if (typeof journey[i+1] === 'number') {
        i++;
      }
    }
  }
  
  return `£${fare.toFixed(2)}`;
}