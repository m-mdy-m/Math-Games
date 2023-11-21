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
    // random number in 1 and 20
  let [num1, num2] = [randomValue(1, 20), randomValue(1, 20)];
    // random operator
  let randomOperator = operators[Math.floor(Math.random() * operators.length)];
  if (randomOperator === "-" && num2 > num1) {
    [num1, num2] = [num2, num1];
  }
  let solution = eval(`${num1}${randomOperator}${num2}`)
    let randomVar = randomValue(1,5)
    if (randomVar == 1) {
        answerValue = num1;
        question.innerHTML = `<input type="number" id="inputValue" placeholder="?"\> ${randomOperator} ${num2} = ${solution}`
    }else if (randomVar ==2 ){
        answerValue= num2;
        question.innerHTML = `${num1}${randomOperator} <input type="number" id="inputValue" placeholder="?"\>= ${solution}`
    }else if(randomVar == 3){
        answerValue = randomOperator;
        operatorQuestion = true
        question.innerHTML = `${num1}<input type="text" id="inputValue" placeholder="?"\>${num2}= ${solution}`
    }else{
        answerValue = solution
        question.innerHTML = `${num1}${randomOperator}${num2}=<input type="number" id="inputValue" placeholder="?"\>`
    }   
    // Check input
    submitBtn.addEventListener('click',(e)=>{
        e.preventDefault()
        messageError.classList.add('hide')
        let userInput = document.getElementById('inputValue').value
        if (userInput) {
                if(userInput == answerValue){
                    stop('<span>Correcy Answer🎉</span>')
                }else if(operatorQuestion && !operators.includes(userInput)){
                    messageError.classList.remove('hide');
                    messageError.innerHTML = 'please enter valid operator'
                }else{
                    stop('Opps!!<span>Wrong</span>Answer')
                }
        }else{
            messageError.classList.remove('hide');
            messageError.innerHTML="input Cannot Be Empty"
    }
    })
};
//  start 
startBtn.addEventListener('click',()=>{
    operatorQuestion=false
    answerValue=""
    messageError.innerHTML = ""
    messageError.classList.add('hide')
    controls.classList.add('hide')
    startBtn.classList.add('hide')
    questionGenerator()
})
//  stop
const stop = (resultText)=>{
    result.innerHTML = resultText
    startBtn.innerHTML = "Restart"
    controls.classList.remove('hide')
    startBtn.classList.remove('hide')
}