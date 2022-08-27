"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Sensei = /** @class */ (function (_super) {
    __extends(Sensei, _super);
    function Sensei(name) {
        var _this = _super.call(this, name, 200) || this;
        _this.strength = 10;
        _this.speed = 10;
        _this.wisdom = 10;
        return _this;
    }
    Sensei.prototype.speakWisdom = function () {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    };
    return Sensei;
}(Ninja));
var superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
console.log(superSensei.showStats());
