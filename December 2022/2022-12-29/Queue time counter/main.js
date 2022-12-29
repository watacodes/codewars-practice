/*

Codewars, 7k: Queue time counter

*/

const queue = (queuers, pos) => {
  let totalMinutes = 0;
  let queueTime = 0;
  for (let i = 0; i < queuers.length; i++) {
    if (i <= pos) {
      queueTime = queuers[i] < queuers[pos] ? queuers[i] : queuers[pos];
      totalMinutes += queueTime;
    } else {
      queueTime = queuers[pos] - 1 < queuers[i] ? queuers[pos] - 1 : queuers[i];
      totalMinutes += queueTime;
    }
  }
  return totalMinutes;
}