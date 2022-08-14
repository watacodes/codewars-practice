/*

Codewars, 8k: Fuel Calculator

In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.

Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.

Good Luck!

Note
1 Dollar = 100 Cents

*/

// more than or equal to 2 litres -> rest would be 5 * rest
// more than or equal to 4 litres -> rest would be 10 * rest
// more than that, every two litres -> increments, up to 25 cents per litre
// return 2 decimal places.

const fuelPrice = (liters, pricePerLiter) => {
  if (liters >= 10) {
    pricePerLiter = pricePerLiter - 0.25;
  } else if (liters >= 8) {
    pricePerLiter = pricePerLiter - 0.2;
  } else if (liters >= 6) {
    pricePerLiter = pricePerLiter - 0.15;
  } else if (liters >= 4) {
    pricePerLiter = pricePerLiter - 0.1;
  } else if (liters >= 2) {
    pricePerLiter = pricePerLiter - 0.05;
  }
  return parseFloat((liters * pricePerLiter).toFixed(2));
};

console.log(fuelPrice(5, 1.23));

console.log(fuelPrice(5, 1.23));