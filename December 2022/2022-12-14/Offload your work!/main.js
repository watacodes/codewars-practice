/*

Codewars, 7k: Offload your work!

*/

const workNeeded = (projectMinutes, freelancers) => {
  const requiredTime = projectMinutes - freelancers.reduce((acc, curr) => acc + curr[0] * 60 + curr[1], 0);
  return requiredTime <= 0 ? 'Easy Money!' : `I need to work ${requiredTime / 60 | 0} hour(s) and ${requiredTime % 60} minute(s)`; 
}