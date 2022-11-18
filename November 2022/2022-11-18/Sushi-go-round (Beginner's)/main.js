/*

Codewars, 7k: Sushi-go-round (Beginner's)

*/

const totalBill = str => {
  if (!str || str.trim().length === 0) return 0;
  const plates = str.match(/r/g).length || 0;
  const freePlates = Math.floor(plates / 5);
  return (plates - freePlates) * 2;
};