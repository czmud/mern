"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        return `name: ${this.name}, strength: ${this.strength}, speed: ${this.speed}, health: ${this.health}`;
    }
    drinkSake() {
        this.health += 10;
    }
}
let ninja1 = new Ninja("john", 20);
ninja1.sayName();
ninja1.drinkSake();
console.log(ninja1.showStats());
class Sensei extends Ninja {
    constructor(name) {
        super(name, 200);
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
console.log(superSensei.showStats());
