/*

Codewars, 7k: Ironman Triathlon

*/

const iTri = distance => {
  if (distance === 0) return 'Starting Line... Good Luck!';

  const distanceOfRace = 140.60;

  if (distance < 2.4) {
    return {'Swim':`${(distanceOfRace - distance).toFixed(2)} to go!`};
  } else if (distance < 114.6) {
    return {'Bike':`${(distanceOfRace - distance).toFixed(2)} to go!`};
  } else if (distanceOfRace - distance > 10) {
    return {'Run':`${(distanceOfRace - distance).toFixed(2)} to go!`};
  } else if (distanceOfRace - distance <= 10 && distanceOfRace > distance) {
    return {'Run':'Nearly there!'};
  } else {
    return 'You\'re done! Stop running!';
  }
}