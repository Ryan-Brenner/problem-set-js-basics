/*

  Create the "Bottles of beer on the wall" song (watch out for infinite loops!):

  ```
      5 bottles of beer on the wall,
      5 bottles of beer!
      Take one down and pass it around,
      4 bottles of beer on the wall...

      4 bottles of beer on the wall,
      4 bottles of beer!
      Take one down and pass it around,
      3 bottles of beer on the wall...
      etc.
  ```

  Bonuses
  - How would you change "0" to "No more"?
  - How would you fix "1 bottles of beer"?

*/

// YOUR CODE HERE


var bottlecount = prompt("how many bottles of ____ shall we drink?");
var bottlecount = parseInt(bottlecount);
if(Number.isInteger(bottlecount)===false){
alert("Nice Try! but that is not a number go back to Sesame St.");
}
else{

for(i=bottlecount;i>=1;i--){
  if(i>2){
console.log(i+" bottles of beer on the wall,");
console.log(i+" bottles of beer!");
console.log("take one down and pass it around,");
console.log(i-1+" bottles of beer on the wall...");
console.log();
}
if(i===2){
console.log(i+" bottles of beer on the wall,");
console.log(i+" bottles of beer!");
console.log("take one down and pass it around,");
console.log(i-1+" bottle of beer on the wall...");
console.log();
}

if (i===1){
console.log("1 bottle of beer on the wall,");
console.log("1 bottle of beer!");
console.log("take it down and pass it around, savor the flavor");
console.log("no more bottles of beer on the wall...");
console.log();
}}}






}
