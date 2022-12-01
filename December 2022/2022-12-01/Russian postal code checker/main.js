/*

Codewars, 7k: Russian postal code checker

*/

const zipvalidate = postcode => {
  const regex = /^[12346]{1}\d{5}$/;
  return regex.test(postcode) ? true : false;
}

console.log(zipvalidate(198328))