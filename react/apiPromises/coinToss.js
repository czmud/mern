"use strict";
exports.__esModule = true;
function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}
function fiveHeads() {
    return new Promise(function (resolve, reject) {
        var headsCount = 0;
        var attempts = 0;
        while (headsCount < 5) {
            attempts++;
            var result = tossCoin();
            console.log("".concat(result, " was flipped"));
            if (result === "heads") {
                headsCount++;
            }
            else {
                headsCount = 0;
            }
            if (attempts > 100) {
                reject("Program quit after ".concat(attempts, " attempts. Better luck next time!"));
            }
        }
        resolve("It took ".concat(attempts, " tries to flip five \"heads\""));
    });
}
fiveHeads()
    .then(function (res) { return console.log(res); })["catch"](function (err) { return console.log(err); });
console.log("When does this run now?");
