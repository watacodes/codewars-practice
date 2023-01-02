/*

Codewars, 7k: Cogs

*/

const cogRpm = cogs => {
  return (cogs.length % 2 ? 1 : -1) * cogs[0] / cogs[cogs.length - 1];
}