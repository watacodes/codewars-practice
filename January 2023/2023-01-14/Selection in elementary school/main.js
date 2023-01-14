/*

Codewars, 7k: Selection in elementary school

*/

function schoolSelection(array) {
  const sorted = {
    'Kindergarten': 0,
    '1st grade': 0,
    '2nd grade': 0, 
    '3rd grade': 0, 
    '4th grade': 0,
  }

  const gradesAndAges = {
    5: 'Kindergarten',
    6: '1st grade',
    7: '2nd grade',
    8: '3rd grade',
    9: '4th grade',
  }

  for (const age of array) {
    if (gradesAndAges[age]) {
      sorted[gradesAndAges[age]]++;      
    }
  }
  return sorted;
}