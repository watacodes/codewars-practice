/*

Codewars, 7k: Find an employees role in the company

*/

const findEmployeesRole = name => {
  const [fName, lName] = [name.split(' ')[0], name.split(' ')[1]];
  const role = employees.findIndex((p, i) => p.firstName === fName && p.lastName === lName);
  return role !== -1 ? employees[role].role : 'Does not work here!';
}