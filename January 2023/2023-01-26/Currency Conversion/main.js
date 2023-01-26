/*

Codewars, 7k: Currency Conversion

*/

function convertMyDollars(usd, currency) {
  if (/[AEIOU]/.test(currency[0])) {
    return `You now have ${usd * CONVERSION_RATES[currency]} of ${currency}.`
  } else {
    return `You now have ${usd * parseInt(CONVERSION_RATES[currency], 2)} of ${currency}.`;
  }
}