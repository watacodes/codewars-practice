/*

Complete the function that receives as input a string, and produces outputs according to the following table:


Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"

*/

const getDrinkByProfession = occup => {
  let capitalized = occup.toUpperCase();
  if (capitalized === "JABRONI") return "Patron Tequila";
  if (capitalized === "SCHOOL COUNSELOR") return "Anything with Alcohol";
  if (capitalized === "PROGRAMMER") return "Hipster Craft Beer";
  if (capitalized === "BIKE GANG MEMBER") return "Moonshine";
  if (capitalized === "POLITICIAN") return "Your tax dollars";
  if (capitalized === "RAPPER") return "Cristal";
  return "Beer";
}

console.log(getDrinkByProfession('bike ganG member'));