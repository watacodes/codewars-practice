/*

Codewars, 5k: Guess The Gifts!

*/

function guessGifts(wish, cond) {
  return wish.filter(e => cond.some(k => k.size === e.size && k.clatters === e.clatters && k.weight === e.weight)).map(item => item.name);
}

const wishlist = [
  {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
  {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
  {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

const presents = [
  {size: "medium", clatters: "a bit", weight: "medium"},
  {size: "small", clatters: "yes", weight: "light"}
];

console.log(guessGifts(wishlist, presents));