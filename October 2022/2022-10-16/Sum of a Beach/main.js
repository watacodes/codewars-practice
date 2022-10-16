/*

Codewars, 7k: Sum of a Beach

eaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).

Examples
sumOfABeach("WAtErSlIde")                    ==>  1
sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
sumOfABeach("cItYTowNcARShoW")               ==>  0

*/

const sumOfABeach = beach => {
  return beach.split(/water|sand|fish|sun/gi).length - 1;
}

console.log(sumOfABeach("GolDeNSanDyWateRyBeaChSuNN"))