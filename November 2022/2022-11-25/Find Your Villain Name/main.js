/*

Codewars, 7k: Find Your Villain Name

*/

function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  const firstName = `The ${m[birthday.getMonth()]}`;
  const lastName = ` ${d[birthday.getDate() % 10]}`;
  return firstName + lastName;
}