/*

Codewars, 7k: Whose bicycle?

*/

const whoseBicycle = (br1, br2, br3) => {
  const br1Score = Object.values(br1).reduce((acc, curr) => acc + curr, 0);
  const br2Score = Object.values(br2).reduce((acc, curr) => acc + curr, 0);
  const br3Score = Object.values(br3).reduce((acc, curr) => acc + curr, 0);
  const resStr = 'I need to buy a bicycle for my ';
  return br1Score === br2Score && br2Score === br3Score
          ? resStr + 'third son.'
          : br1Score > br2Score && br1Score > br3Score
          ? resStr + 'first son.'
          : br2Score > br1Score && br2Score > br3Score
          ? resStr + 'second son.'
          : resStr + 'third son.';
}