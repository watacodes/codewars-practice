/*

Codewars, 7k: Recycle!

*/

function recycleMe(recycle) { 
  return recycle.reduce((acc, curr) => {
    if (curr > 0) {
      acc[0]++;
    } else if (curr < 0) {
      acc[1]++;
    } else {
      acc[2]++;
    }
    return acc;
  }, [0, 0, 0]);
}