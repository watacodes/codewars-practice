/*

Codewars, 8k: 

There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

Examples
mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free

*/

const mango = (q, p) => {
  console.log(q,p)
  if (q < 3) return q * p;
  if (q === 3) return (q-1) * p;
  if (q % 3 === 0) return (q - q / 3) * p;
  return (q - Math.floor(q / 3)) * p;
}