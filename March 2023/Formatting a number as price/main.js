/*

Codewars, 5k: Formatting a number as price

*/

const numberToPrice = num => {
  console.log(num)
  if (isNaN(num) || !/\d/g.test(num)) return 'NaN';
  const converted = num.toLocaleString();
  const targetIdx = converted.indexOf('.');
  return targetIdx < 0 ? converted + '.00' 
          : converted.length - targetIdx >= 3
          ? converted.slice(0, targetIdx + 3)
          : converted + '0';
}