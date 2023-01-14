/*

Codewars, 7k: Conference Traveller

*/

function conferencePicker (citiesVisited, citiesOffered) {
  if (citiesVisited.length === 0) return citiesOffered[0];
  for (let city of citiesOffered) {
    if (!citiesVisited.includes(city)) return city;
  }
  return 'No worthwhile conferences this year!';
}