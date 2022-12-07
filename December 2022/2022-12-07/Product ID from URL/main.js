/*

Codewars, 7k: Product ID from URL

*/

const getProductId = url => {
  const bottomPart = url.split(/(-p-)/);
  const regex = /^[0-9]+[-]/g;
  for (let i of bottomPart) {
    if (regex.test(i)) {
      return i.split('-')[0];
    }
  }
}

const testUrl = "http://www.exampleshop.com/fancy-coffee-cup-p-90764-12052019.html";

console.log(getProductId(testUrl));
