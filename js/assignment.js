"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

function returnTheRemainder(num1, num2) {
return num1 % num2;

}
let remainder = returnTheRemainder(5, 4);
console.log(remainder);


function checkIfEven(number) { 
return number % 2 === 0;
}
let isEven = checkIfEven(47);
console.log(isEven);

function getTheFourthElement(array) {
    return array[3];
}
 
let fourthElement = getTheFourthElement(lostNumbers); 
console.log(fourthElement);

submissionBtn.addEventListener("click", function () { 
    remainderElement.innerHTML = returnTheRemainder(5, 4);
    checkIfEvenElement.innerHTML = checkIfEven(47); 
    lostNumbersElement.innerHTML = getTheFourthElement(lostNumbers);
    });