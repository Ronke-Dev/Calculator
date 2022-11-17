// Dom manipulate all the classes assigned to each button type

const clearBtn = document.querySelector(".btn-clear")
const deleteBtn = document.querySelector(".btn-delete")
const numberBtn =document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".btn-operator");
const pointBtn = document.querySelector(".point"); //this is not included as a number because we want an effect that doesn't allow it to be repeated within a number sequence
const display = document.querySelector(".display");
const equalBtn = document.querySelector(".btn-equals");


//lets make the buttons able to listen to clicks and produce a result
clearBtn.addEventListener("click", function(){
    alert ("clear the values")
});

deleteBtn.addEventListener("click", function(){
    alert ("delete the recently entered value")
});

// when you use querySelectorAll,you cant apply an event listener directly, because it wouldn't work. 
//Javascript doesn’t return DOM elements as a simple array — it returns them as a NodeList
// In modern browsers, NodeLists behave a lot like arrays, so we can use forEach to loop through each.
// you will append the Dom element to the forEach, which them appends it to a new parameter in the foreach loop, then call the event on the for parameter

numberBtn.forEach(function(numbersButton){
    numbersButton.addEventListener('click',function(){
        let numberBtnValues = numbersButton.getAttribute("data-num")
        alert(numberBtnValues); 
    })
});


operatorBtn.forEach(function(operatorButton){
    operatorButton.addEventListener("click",function(){
        alert("we are operators")
    })
});


pointBtn.addEventListener("click",function(){
    alert("a point")
});


display.addEventListener("click",function(){
    alert("the space")
});

equalBtn.addEventListener("click",function(){
    alert("equal sign")
});


// UPDATE THE STEPS BY ADDING DATA ATTRIBUTES
numberBtn.forEach(function(numbersButton){
    numbersButton.addEventListener('click',function(){
        let numberBtnValues = numbersButton.getAttribute("data-num")
        alert(numberBtnValues); 
    })
});


operatorBtn.forEach(function(operatorButton){
    operatorButton.addEventListener("click",function(){
        let operatorBtnShow =operatorButton.getAttribute("data-sign")
        alert(operatorBtnShow);
    })
});


pointBtn.addEventListener("click",function(){
    let pointShow = pointBtn.getAttribute("data-point")
    alert(pointShow)
});


display.addEventListener("click",function(){
    alert("the space")
});

equalBtn.addEventListener("click",function(){
    let equalShow = equalBtn.getAttribute("data-equal")
    alert(equalShow)
});