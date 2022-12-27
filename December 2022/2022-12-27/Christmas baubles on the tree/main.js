/*

Codewars, 7k: Christmas baubles on the tree

*/

const baublesOnTree = (baubles, branches) => {
  if (branches === 0) return 'Grandma, we will have to buy a Christmas tree first!';
  
  const tree = [];
  
  for (let i = 0; i < branches; i++) {
    tree.push(Math.floor(baubles / branches) + (i < baubles % branches ? 1 : 0));
  }
  return tree;
}