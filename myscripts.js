console.log("My first JS from a external page.");
// Js is a loosely typed language  
var x = 5;
var y = 9;

console.log(x * y);

function sum(a, b) {
    return a + b;
}
console.log(sum(x, y));
// You can assign functions to variables
var mySum = sum;
console.log(mySum);

//Button Function
function btnClicked() {
    console.log("My Button Clicked!");
}

//Real Example
function update() {
    console.log("Updating Result");
    var input = document.getElementById("myinput");
    var output = document.getElementById("output");
    output.innerHTML = input.value;
}