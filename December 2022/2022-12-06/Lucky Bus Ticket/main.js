/*

Codewars, 7k: Lucky Bus Ticket

*/

const isLucky = num => {
  if (num.length === 6) {
    const firstHalf = [...num.slice(0, 3)].reduce((acc, curr) => +acc + +curr);
    const secondHalf = [...num.slice(3)].reduce((acc, curr) => +acc + +curr);
    return firstHalf === secondHalf;
  }
  return false;
}