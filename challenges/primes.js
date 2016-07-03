/*

  1. Create a function `isPrime(num)` that returns true if the number passed in is a prime number
      and false if not.
  2. Using your `isPrime` function, create a function `primes(max)` that will return an array of all
      prime numbers up to, but not exceeding a max number.

  Reading: http://stackoverflow.com/questions/439870/why-are-primes-important-in-cryptography
*/

// YOUR CODE HERE

var n = parseInt(prompt("Pick a number and see if it is prime"));
var primes = [];
function isPrime(n){
for (var counter = 2; counter <= n; counter++) {

   var notPrime = false;
        for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
             notPrime = true;
         }
     }
     if (notPrime === false) {
         primes.push(counter);
     }}
 }

 if(Number.isInteger(n)===false){
	alert("Nice Try! but that is not a number go back to Sesame Street");
} 
else if(n<2){
	alert("Not a prime number");
}
else{
 isPrime(n);
 console.log(primes);
}





