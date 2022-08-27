"use strict";
exports.__esModule = true;
var Ninja = /** @class */ (function () {
    function Ninja(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    Ninja.prototype.sayName = function () {
        console.log(this.name);
    };
    Ninja.prototype.showStats = function () {
        return "name: ".concat(this.name, ", strength: ").concat(this.strength, ", speed: ").concat(this.speed, ", health: ").concat(this.health);
    };
    Ninja.prototype.drinkSake = function () {
        this.health += 10;
    };
    return Ninja;
}());
var ninja1 = new Ninja("john", 20);
ninja1.sayName();
ninja1.drinkSake();
console.log(ninja1.showStats());
