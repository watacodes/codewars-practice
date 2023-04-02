/*

Codewars, 6k: Descriptive selections of data

*/

function selectNames(table) {
  return map(rest(table), first);
}

function selectVoices(table) {
  return map(rest(table), third);
}

function selectNamesAndVoices(table) {
  return zip(selectNames(table), selectVoices(table));
}