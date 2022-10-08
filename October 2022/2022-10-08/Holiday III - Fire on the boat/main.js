/*

Codewars, 7k: Holiday III - Fire on the boat

Enjoying your holiday, you head out on a scuba diving trip!

Disaster!! The boat has caught fire!!

You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.

Go to work!

*/

const fireFight = s => s.replace(/Fire/g, '~~');

console.log(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"));