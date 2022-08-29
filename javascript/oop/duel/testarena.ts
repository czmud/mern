import { Unit } from "./unit";
import { Effect } from "./effect";

// Make an instance of "Red Belt Ninja"
let redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);

// Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
let hardAlgorithm = new Effect("Hard Algorithm", 2, "resilience", 3 );
hardAlgorithm.play( redBeltNinja );

// Make an instance "Black Belt Ninja"
let blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

// Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
let unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "resilience", -2 );
unhandledPromiseRejection.play( redBeltNinja );

// Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
let pairProgramming = new Effect("Pair Programming", 3, "power", 2);
pairProgramming.play( redBeltNinja) ;

// "Red Belt Ninja" uses the attack method on "Black Belt Ninja"
redBeltNinja.attack( blackBeltNinja );

console.log( blackBeltNinja.res );
console.log( redBeltNinja.power );
console.log( redBeltNinja.res );

