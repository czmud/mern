"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = void 0;
const card_1 = require("./card");
class Unit extends card_1.Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        target.res -= this.power;
    }
}
exports.Unit = Unit;
