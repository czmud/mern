export {}


// 1
var hello = 'world';                                 
console.log(hello);                                   
// output to console: 'world'


// 2
var needle = 'haystack';
function test() : void {
    var needle = 'magnet';
    console.log(needle);
}
test();
// output to console: 'magnet'

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// output to console: 'super cool'


// 4
var food = 'chicken';
console.log(food);
function eat(){
    var food = 'gone';
    food = 'half-chicken';
    console.log(food);
}
eat();
// output to console: 'chicken'
// 'half-chicken'


// 5
// var mean = function() {
//     var foods = "fish";
//     foods = "chicken";
//     console.log(foods);
//     console.log(foods);
// }
// mean();
// console.log(foods);
// console.log(foods);
// syntax error. foods is never defined in global scope.


// 6
var genre = "disco";
function rewind() {
    var genre = "r&b";
    genre = "rock";
    console.log(genre);
    console.log(genre);
}
console.log(genre);
rewind();
console.log(genre);
// output to console: 'disco'
// 'rock'
// 'rock'
// 'disco'


// 7
// function learn() {
//     var dojo = "burbank";
//     dojo = "seattle";
//     console.log(dojo);
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);
// syntax error. dojo is never declared in global scope

// 8
function makeDojo(name: string , students: number) : string {
    let dojo: {name?: string, students?: number, hiring?: boolean, message: string} = {message: ""};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
        dojo.message = `formed new dojo. name: ${dojo.name}, students: ${dojo.students}, hiring: ${dojo.hiring}`;
    }
    else if(dojo.students <= 0){
        dojo.message = "closed for now";
    }
    return dojo.message;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
// output to console: 'formed new dojo. name: Chicago, students: 65, hiring: true'
// 'closed for now'
