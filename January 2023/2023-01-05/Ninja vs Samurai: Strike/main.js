/*

Codewars, 7k: Ninja vs Samurai: Strike

*/

class Warrior {
  constructor(name) {
    this.name = name;  
    this.health = 100;
  }
  strike(enemy, swings) {
    return enemy.health -= swings * 10;   
  }
}