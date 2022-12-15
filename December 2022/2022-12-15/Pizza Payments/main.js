/*

Codewars, 7k: Pizza Payments

*/

const michaelPays = costs => {
  const newCost = Math.round(costs * 100) / 100;
  if (costs < 5) return Number(costs.toFixed(2));
  const katePays = newCost / 3 >= 10 ? 10 : parseFloat(newCost / 3).toFixed(2);
  return Number((newCost - katePays).toFixed(2));
}