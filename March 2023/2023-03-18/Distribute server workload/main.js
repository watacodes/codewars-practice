/*

Codewars, 6k: Distribute server workload

*/

function distribute(nodes, workload) {
  let containers = new Array(workload).fill(0).map((e, i) => i);
  console.log(containers);
  return new Array(nodes).fill(0).map((e, i) => containers.splice(0, Math.ceil(containers.length / (nodes - i))));
}


console.log(distribute(4, 10)) // 012, 345, 67, 89