"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Effect = void 0;
const card_1 = require("./card");
class Effect extends card_1.Card {
    constructor(name, cost, stat, magnitude) {
        super(name, cost);
        this.stat = stat;
        this.magnitude = magnitude;
        this.text = this.generateText();
    }
    generateText() {
        let textString = "";
        textString += (this.magnitude < 0 ? "Decrease " : "Increase ");
        textString += "the target's ";
        textString += this.stat;
        textString += "by ";
        textString += (this.magnitude < 0 ? -this.magnitude : this.magnitude);
        return textString;
    }
    play(target) {
        if (this.stat === "resilience") {
            target.res += this.magnitude;
        }
        else if (this.stat == "power") {
            target.power += this.magnitude;
        }
    }
}
exports.Effect = Effect;
