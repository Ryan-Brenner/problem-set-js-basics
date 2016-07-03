/*
  Palindrome Detector

  Create a function `isPalindrome` that returns a boolean indicating whether a given string is a palindrome.

  Here are some examples of palindromes (from easiest to hardest, try to get as many as you can!):

  TRUE:
  - mom
  - racecar
  - stack cats
  - Pull up if I pull up
  - Amore, Roma.
  - A man, a plan, a canal: Panama.

  FALSE:
  - these
  - will not
  - work!

*/

// YOUR CODE HERE


var inputString = prompt("input word to check for palindromity");
var inputArr=inputString.replace(/[^A-Z0-9]/ig,"").toLowerCase().split('');
console.log(inputArr);
var counter=0;
var length = Math.floor(inputArr.length);
for(var i=1; i<length/2;i++){
  if(inputArr[i-1]!==inputArr[length-i]){
    counter+=i;}}
    console.log(counter);
  if(counter!==0){
  alert("Does Not Contain Properties of Palindrome");
}
  else{
  alert("It's a Palindrome");}
  