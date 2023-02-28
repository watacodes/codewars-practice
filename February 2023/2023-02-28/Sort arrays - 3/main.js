/*

Codewars, 5k: Sort arrays - 3

*/

const sortme = source => source.sort((a, b) => a.split('-')[1] - b.split('-')[1] || a.split('-')[0].localeCompare(b.split('-')[0]));