// created var to select .timer timer text
var counter = document.querySelector(".timer");
// created a var for the quizcard
var quizcardel = document.querySelector(".quizcard");

var starti = document.querySelector(".startbutton");
// added a var for count
var timeleft = 60;
// added a var for placement of questions
var currentquestionindex = 0;
// created var to contain questions
var quizquestions = [
    {
        question: "What color is lobster after it is cooked?",
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
// created a timer
function count() {
    var timer = setInterval(function() {
    timeleft--;
    counter.textContent = timeleft;
    if (timeleft === 0) {
        clearInterval(timer);
    }
}, 1000);
}
// added a function to show current question
function displayquestion() {
    quizcardel.innerHTML = "";
    var q = quizquestions[currentquestionindex];
    var qTitleEl = document.createElement("h1");
    qTitleEl.textContent = q.question;
    quizcardel.append(qTitleEl);
    
    var answers = q.answers;
    for (var i = 0; i < answers.length; i++) {
        var answer = answers[i];
        var button = document.createElement("button");
        // var response = document.querySelector(".quizcard)");
        button.textContent = answer;
        button.addEventListener("click", function (event) {
            var selectedanswer = event.target.textContent;
            if (selectedanswer === q.correct) {
                var response = document.createElement("p");
                response.textContent = "Correct!";
                correct();
            } else {
                incorrect();
            }
            currentquestionindex++
            displayquestion();
        });
        quizcardel.append(button);
    }
}
starti.addEventListener("click", function() { 
    count()
    displayquestion()
}); 