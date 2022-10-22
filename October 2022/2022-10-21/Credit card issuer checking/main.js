/*

Codewars, 7k: Credit card issuer checking

Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |
Examples
getIssuer(4111111111111111) == "VISA"
getIssuer(4111111111111) == "VISA"
getIssuer(4012888888881881) == "VISA"
getIssuer(378282246310005) == "AMEX"
getIssuer(6011111111111117) == "Discover"
getIssuer(5105105105105100) == "Mastercard"
getIssuer(5105105105105106) == "Mastercard"
getIssuer(9111111111111111) == "Unknown"

*/

const getIssuer = number => {
  let numberToString = String(number);
  if (numberToString.length === 15 && numberToString.match(/^3[4|7]/)) return 'AMEX';
  if (numberToString.length === 16 && numberToString.match(/^6011/)) return 'Discover';
  if ((numberToString.length === 13 || numberToString.length === 16 )&& numberToString.match(/^4/)) return 'VISA'
  if (numberToString.length === 16 && numberToString.match(/^5[1-5]/)) return 'Mastercard';
  return 'Unknown';
};


console.log(getIssuer(378282246310005))