const placeholder = document.getElementById('placeholder');

///////////////////////////////////////////////////////////

// Codewars question (https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript)
// Title: How good are you really?
// Result: Passed

// Question detail:
/* 

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you    may add your point to the given array!

*/

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    // Add all the classPoints, which will be given in an array form.
    // After that, divide it by the number of values in the array.
    // Store the value in a seperate variable
    // If newVar < yourPoints, return true : return false.
    
    let average = 0;
    let sum = 0;
    classPoints.map(x => sum += x);
    average = sum / classPoints.length;
    let result = (yourPoints > average) ? true : false;
    placeholder.innerText = `Your test result is: ${result}`;
    return result;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
