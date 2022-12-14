// Dom manipulate all the classes assigned to each button type

const clearBtn = document.querySelector(".btn-clear")
const deleteBtn = document.querySelector(".btn-delete")
const numberBtn =document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".btn-operator");
const pointBtn = document.querySelector(".point"); //this is not included as a number because we want an effect that doesn't allow it to be repeated within a number sequence
const display = document.querySelector(".display");
const equalBtn = document.querySelector(".btn-equals");


//lets make the buttons able to listen to clicks and produce a result

// when you use querySelectorAll,you cant apply an event listener directly, because it wouldn't work. 
//Javascript doesn’t return DOM elements as a simple array — it returns them as a NodeList
// In modern browsers, NodeLists behave a lot like arrays, so we can use forEach to loop through each.
// you will append the Dom element to the forEach, which them appends it to a new parameter in the foreach loop, then call the event on the for parameter

numberBtn.forEach(function(numbersButton){
    numbersButton.addEventListener('click',function(){
        let numberBtnValues = numbersButton.getAttribute("data-num")
        display.textContent += numberBtnValues                   //let the values appear in the display box
       
    })
});


operatorBtn.forEach(function(operatorButton){
    operatorButton.addEventListener("click",function(){
        let operatorBtnShow =operatorButton.getAttribute("data-sign");
        display.textContent += operatorBtnShow
    
    })
});


pointBtn.addEventListener("click",function(){
    let pointShow = pointBtn.getAttribute("data-point");
    display.textContent += pointShow
    
});



equalBtn.addEventListener("click",function(){
    let equalShow = equalBtn.getAttribute("data-equal");
    display.textContent += equalShow
});


//when i hit clear, i want everything on my computer clear
clearBtn.addEventListener("click", function(){
   let displayE = ""
    display.textContent = display
});

deleteBtn.addEventListener("click", function(){
    alert ("delete the recently entered value")
});


// LETS MAKE THE OPERATORS AND BUTTONS PRODUCE A RESULT

// add
function add(){
    let result = numberBtnValues + numberBtnValue
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