/*

Codewars, 6k: Type Checking

*/

function type(val) {
  if (val === undefined) return 'Undefined';
  if (val === null) return 'Null';

  const t = val.constructor.name;
  
  if (t === 'String' && !isNaN(val)) return 'String Numeric';
  if (t !== 'Number') return t;
  if (Number.isNaN(val)) return 'Number NaN';
  if (Number.isInteger(val)) return 'Number Integer';
  if (Number.isFinite(val)) return 'Number Float';
  return 'Number Infinite';
};