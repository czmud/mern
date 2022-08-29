"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unit_1 = require("./unit");
const effect_1 = require("./effect");
// Make an instance of "Red Belt Ninja"
let redBeltNinja = new unit_1.Unit("Red Belt Ninja", 3, 3, 4);
// Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
let hardAlgorithm = new effect_1.Effect("Hard Algorithm", 2, "resilience", 3);
hardAlgorithm.play(redBeltNinja);
// Make an instance "Black Belt Ninja"
let blackBeltNinja = new unit_1.Unit("Black Belt Ninja", 4, 5, 4);
// Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
let unhandledPromiseRejection = new effect_1.Effect("Unhandled Promise Rejection", 1, "resilience", -2);
unhandledPromiseRejection.play(redBeltNinja);
// Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
let pairProgramming = new effect_1.Effect("Pair Programming", 3, "power", 2);
pairProgramming.play(redBeltNinja);
// "Red Belt Ninja" uses the attack method on "Black Belt Ninja"
redBeltNinja.attack(blackBeltNinja);
console.log(blackBeltNinja.res);
console.log(redBeltNinja.power);
console.log(redBeltNinja.res);
