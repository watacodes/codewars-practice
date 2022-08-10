/*

Codewars, 8k: Tip Calculator

Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

You need to consider the following ratings:

Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.

*/

const calculateTip = (fee, rating) => {
  if (rating.toLowerCase() === 'excellent') return Math.ceil(fee * 0.2);
  if (rating.toLowerCase() === 'great') return Math.ceil(fee * 0.15);
  if (rating.toLowerCase() === 'good') return Math.ceil(fee * 0.1);
  if (rating.toLowerCase() === 'poor') return Math.ceil(fee * 0.05);
  if (rating.toLowerCase() === 'terrible') return 0;
  return 'Rating not recognised';
}