"use strict";
exports.__esModule = true;
// 1
var cars = ['Tesla', 'Mercedes', 'Honda'];
var randomCar = cars[0];
var otherRandomCar = cars[1];
//Predict the output
console.log(randomCar); // 'Tesla'
console.log(otherRandomCar); // 'Mercedes'
// 2
var employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
};
var otherName = employee.name;
//Predict the output
// console.log(name); syntax error. name is not defined
console.log(otherName); // 'Elon'
// 3
var person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
};
var password = '12345';
// const { password: hashedPassword } = person; syntax error - variable name mismatch
//Predict the output
console.log(password); // '12345'
// console.log(hashedPassword); syntax error. hashedPassword is not defined because previous line failed
// 4
var numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
var first = numbers[1];
var second = numbers[3];
var third = numbers[8];
//Predict the output
console.log(first == second); // false
console.log(first == third); // true
// 5
var lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
};
var key = lastTest.key;
var secondKey = lastTest.secondKey;
var willThisWork = secondKey[1];
//Predict the output
console.log(key); // 'value'
console.log(secondKey); // [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // 1
console.log(willThisWork); // 5
