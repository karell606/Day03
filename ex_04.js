let a = 2;
let b = 4
let action = "sub";

function addition() {
return a + b ;
 }
 
function subtraction() {
return a - b;
 }

function calculator () {
if (action === "add") {
	return addition ();
} else if (action === "sub") {
  return subtraction ();
 } else { 
  return 0 ; 
  }
}
 
  
// DO NOT TOUCH - This line will call calculator and display the result for you
if (typeof calculator === "function" && typeof a === "number" &&
		typeof b === "number" && typeof action === "string") {
	displayResult(calculator, a, b, action);
} else {
	console.error("Missing/bad variables or calculator function");
}
