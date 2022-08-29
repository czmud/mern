const { performance } = require('perf_hooks');

Number.prototype.isPrime = function( memo ) {
        
        for( let i of memo ){
            if( i*i > this){
                break;
            }
            if( this % i === 0){
                return false;
            }
        }
        return true;
}

function testPrime(){
    const start = performance.now();
    let primeCount = 0;
    let num = 2; // for math reasons, 1 is considered prime
    memo = [];
    while( primeCount < 1e4 ){
        if( num.isPrime( memo ) ) {
            primeCount++;
            memo.push(num);
        }
        num++;
    }
    console.log(`The 10,000th prime number is ${num-1}`);
    console.log(`This took ${performance.now() - start} milliseconds to run`);
}

// testPrime();
    // un-optimized
    // The 10,000th prime number is 104729
    // This took 62071.01578401029 milliseconds to run

    // after optimization
    // The 10,000th prime number is 104729
    // This took 156.1718730032444 milliseconds to run

// Fibonacci solutions

// recursive
function rFib( n ) {
        if ( n < 2 ) {
            return n;
        }
        return rFib( n-1 ) + rFib( n-2 );
}
// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}

//memoized
function mFib( n, memo = {} ){
    if ( n < 2 ) {
        return n;
    }
    if( ! memo[n] ){
        memo[n] = mFib( n-1, memo ) + mFib( n-2, memo );
    }
    return memo[n];
}

function checkFibonacci( fibFunction, findNum){
    const start = performance.now();
    
    let fibNum = fibFunction(findNum);
    
    console.log(`The ${findNum}th fibonacci number is ${fibNum}`);
    console.log(`This took ${performance.now() - start} milliseconds to run`);
}

// checkFibonacci( rFib, 50)


// recursive solution:
// The 50th fibonacci number is 12586269025
// This took 222891.0595919937 milliseconds to run

// iterative solution:
// The 50th fibonacci number is 12586269025
// This took 5.752149999141693 milliseconds to run

// memoized recursive solution:
// The 50th fibonacci number is 12586269025
// This took 5.11497400701046 milliseconds to run

function checkReverse( reverseFunction, string ){
    const start = performance.now();

    const reversedString = reverseFunction(string);
    
    console.log(reversedString);
    console.log(`This took ${performance.now() - start} milliseconds to run`);
}

function jReverse( string ){
    return string.split("").reverse().join("");
}

function iReverse( string ){
    let newString = "";
    for( let char = string.length-1; char >= 0; char--){
        newString += string[char];
    }
    return newString;
}

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
checkReverse( iReverse, story );

// reverse + join solution:
// This took 5.631085008382797 milliseconds to run

// iterative solution
// This took 5.389752000570297 milliseconds to run


