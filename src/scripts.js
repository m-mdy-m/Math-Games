// Operator Math
let operators = ["+", "-", "*"];
// Select Element
const startBtn = document.getElementById("start-btn");
const question = document.getElementById("question");
const controls = document.querySelector(".controls-container");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");
const messageError = document.getElementById("error-msg");

let answerValue;
let operatorQuestion;

// Random Value Generator

const randomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const questionGenerator = () => {
  let [num1, num2] = [randomValue(1, 20), randomValue(1, 20)];

  let randomOperator = operators[Math.floor(Math.random() * operators.length)];
  if (randomOperator === "-" && num2 > num1) {
    [num1, num2] = [num2, num1];
  }
};
questionGenerator();

startBtn.addEventListener('click',()=>{
    
})