/*

Codewars, 7k: Honey to the Bee

*/

function Bee(capacity, hive) {
  this.capacity = capacity;
  this.hive = hive;
}

function Hive() {
  this.pollen = 100;
}

Hive.prototype.addPollen = function(po) {
  this.pollen += po;
}

Hive.prototype.getPollen = function() {
  return this.pollen;
}

Bee.prototype.unloadPollen = function() {
  this.hive.addPollen(this.capacity);
}