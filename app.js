function init() {
    let submitForm = document.querySelector('#answer-form');
    submitForm.addEventListener('submit', handleSubmit);
};
function handleSubmit(event){
event.preventDefault();
let userAnswer = document.querySelector('#answer-input');
let userAnswerValue = userAnswer.value;

let results = document.querySelector('#answer-results');
let nextQuestion = document.querySelector('#next-question');
console.log(results);
console.log(userAnswerValue);
if(!userAnswerValue){
    results.innerHTML = "<p>veuillez remplir la réponse</p>";
}
else if(userAnswerValue.match(/Biscuiterie Nantaise/i)){
    results.innerHTML = "<p>bonne réponse</p>";
    nextQuestion.innerHTML = '<a href="question2.html">La suite! La suite!</a>';
}
else{
    results.innerHTML = "<p>mauvaise réponse</p>";
}
}
init();