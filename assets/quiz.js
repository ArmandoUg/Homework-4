// created var to select .timer timer text
var counter = document.querySelector(".timer");
// created a var for the quizcard
var quizcardel = document.querySelector(".quizcard");
// added a var for count
var timeleft = 60;
// added a var for placement of questions
var currentquestionindex = 0;
// created var to contain questions
var quizquestions = [
    {
        question: "What color is after it is cooked?",
        answers: [
            "Green",
            "Red",
            "White",
        ],
        correct: "Red",
    },
    {
        question: "How many centimeters does the Eiffel Tower shrink during the summer?",
        answers: [
            "15 centimeters",
            "None, it doesn't shrink",
            "12 centimeters",
        ],
        correct: "15 Centimeters",
    },
    {
        question: "How many pleats are on a chef hat?",
        answers: [
            "20",
            "100",
            "120",
        ],
        correct: "100",
    },
    {
        question: "Which national anthem has no lyrics?",
        answers: [
            "The Soviet National Anthem",
            "The National Anthem of Madagascar",
            "The Spanish National Anthem",
        ],
        correct: 'The Spanish National Anthem',
    },
];
// created a function for count
function count() {
    timeleft--;
    counter.textContent = timeleft;
    if (timeleft === 0) {
        
    }
}
// created a timer
var timer = setInterval(count, 1000);

function displayquestion() {
    quizcardel.innerHTML = "";
    var q =quizquestions[currentquestionindex];
    var qTitleEl = document.createElement("h1");
    qTitleEl.textContent = q.question;
}