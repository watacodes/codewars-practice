/*

Codewars, 6k: Human readable working hours

*/

const readableTimetable = (workdays) => {
  let res = [];
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  
  for (let day of days) {
    if (!(day = workdays.find(e => e.day === day))) {
      res.push([null]);
      continue;
    }
    
    const time = `${day.from} - ${day.to}`;
    
    if (res.length === 0 || res[res.length - 1][0] !== time) {
      res.push([time, []]);
    }
    res[res.length - 1][1].push(day.day);
  }
  return res.filter(e => e[0]).map(([a, b]) => `${b.length === 1 ? b[0] : b[0] + ' - ' + b.pop()}: ${a}`.toUpperCase()).join('\n') || [];
};