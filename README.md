# Calculator

Here are some use cases (abilities the project needs to have):

The calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
add
subtract
multiply
divide
Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
Do not worry about wiring up the JS just yet.
There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
Add a “clear” button.
Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.
Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.
You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
Gotchas: watch out for and fix these bugs if they show up in your code:
Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student solution.
Your calculator should not evaluate more than a single pair of numbers at a time. Example: you press a number button (12), followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator should then do the following: first, evaluate the first pair of numbers (12 + 7), second, display the result of that calculation (19), and finally, use that result (19) as the first number in your new calculation, along with the next operator (-).
You should round answers with long decimals so that they don’t overflow the screen.
Pressing = before entering all of the numbers or an operator could cause problems!
Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

https://www.theodinproject.com/lessons/foundations-calculator

New concept learnt 

1) data-num in the html explained 

the data attribute  (https://www.w3schools.com/tags/att_data-.asp)

The data-* attribute is used to store custom data private to the page or application.

The data-* attribute gives us the ability to embed custom data attributes on all HTML elements.

The stored (custom) data can then be used in the page's JavaScript to create a more engaging user experience (without any Ajax calls or server-side database queries).

The data-* attribute consist of two parts:

The attribute name should not contain any uppercase letters, and must be at least one character long after the prefix "data-"
The attribute value can be any string

dom manipulation - When we want to get attributes from DOM elements, we can use the getAttribute(name)

2) using the forEach to loop through event listeners (https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/)

In other words, how to call addEventListener() on multiple elements at the same time?
You can do this in 2 ways. One is using a loop, the other is using event bubbling.
Using a loop
The loop is the simplest one conceptually.
You can call querySelectorAll() on all elements with a specific class, then use forEach() to iterate on them:

3) Arrow functions explained better  (https://www.folkstalk.com/tech/foreach-function-into-arrow-with-addeventlistener-with-code-examples/)




Script js

https://javascript.plainenglish.io/add-event-listener-to-multiple-elements-in-javascript-e9ff28411992