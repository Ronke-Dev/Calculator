// in a chronological order


// let the numbers show when you click on them
// "when a button is clicked, the display should update with the value of the button"
// We'll need to get all the buttons and their values from the DOM
// We'll need to add an event listener to handle the clicks
// We're updating the display, so we'll need to get the display from the DOM as well

const numberAndOperatorButtons= document.querySelectorAll(".number, .btn-operator");
const display = document.querySelector(".display");


numberAndOperatorButtons.forEach(button =>{
    button.addEventListener("click",function(){
        // now get the value of eat button clicked instead
        const buttonValue = button.getAttribute("data-num")
        alert(buttonValue);
    })
});



// You should be storing the ‘display value’ 

let displayValue = "" //empty string, it will hold the data
// then make the displayValue take in the data in the buttonValue, then  update the alert with the displayvalue
displayValue += buttonValue
alert(displayValue + "is now the display value")

// now remove the alert so that the values can show directly in the display box
display.textContent = displayValue 

// so it becomes
numberAndOperatorButtons.forEach(button =>{
    button.addEventListener("click",function(){
        // now get the value of eat button clicked instead
        const buttonValue = button.getAttribute("data-num");
        displayValue += buttonValue;
        display.textContent = displayValue
    })
});


// Create the functions that populate the display when you click the number buttons. 
// You should be storing the ‘display value’ 
// in a variable somewhere for use in the next step.

// let the numbers show when you click on them
// let the values in the display clear when you hit the clear button
// let the values in the display delete a number when you hit the delete button
// when the equals button is clicked let all the answers/result show

// let numbers = doucmentgetQuerySelector(".number")
// function display(){

// }




// let the numbers show when you click on them
// "when a button is clicked, the display should update with the value of the button"
// We'll need to get all the buttons and their values from the DOM
// We'll need to add an event listener to handle the clicks
// We're updating the display, so we'll need to get the display from the DOM as well

const numberAndOperatorButtons= document.querySelectorAll(".number, .btn-operator");
const display = document.querySelector(".display");
let displayValue = ""


numberAndOperatorButtons.forEach(button =>{
    button.addEventListener("click",function(){
        // now get the value of each button clicked instead
        const buttonValue = button.getAttribute("data-num");
        displayValue += buttonValue;
        display.textContent = displayValue
    })
});


// the equals button
const equalsButton = document.querySelector(".btn-equals")
// Notice we use querySelector here instead of querySelectorAll as we know there is only one element with this selector. 
// querySelector returns a single element instead of a NodeList which means we don't need to use a loop!

// add
function add(a,b){
    const operator = document.querySelector("btn-operator")
    let result = a + b
display.textContent = result;
};


// make the operators functional
// divide

// add
function add(a,b){
return a + b
};

// subtract
function subtract (a,b){
return a - b
};

// multiply
function multiply (a,b){
    return a * b
};

// divide 
function divide (a,b){
    return a / b
};

// operate
function operate(operator = "+", a , b){
    let a = 2;
    let b = 5;
    let operator = "*" ;
    console.log(add(a,b))
};
