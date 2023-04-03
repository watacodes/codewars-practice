/*

Codewars, 6k: Points On A Line

*/

function onLine(points) {
  if (points.length < 3) return true;
  for (let i = 2; i < points.length; i++) {
    if (((points[i-2][0] - points[i-1][0]) * (points[i][1] - points[i-1][1]) !== 
        (points[i-1][0] - points[i][0]) * (points[i-1][1] - points[i-2][1]))) return false;
  }
  return true;
}