// created var to select .timer timer text
var counter = document.querySelector(".timer");
// created a var for the quizcard
var quizcardel = document.querySelector(".quizcard");

var starti = document.querySelector(".startbutton");
// added a var for count
var timeleft = 60;
// added a var for placement of questions
var currentquestionindex = 0;
var flashy = document.querySelector("#magic");
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
        incorrect: ["Green",
            "White"],
    },
    {
        question: "How many centimeters does the Eiffel Tower shrink during the summer?",
        answers: [
            "15 centimeters",
            "None, it doesn't shrink",
            "12 centimeters",
        ],
        correct: "15 centimeters",
        incorrect: [
            "None, it doesn't shrink",
            "12 centimeters",
        ]
    },
    {
        question: "How many pleats are on a chef hat?",
        answers: [
            "20",
            "100",
            "120",
        ],
        correct: "100",
        incorrect: [
            "20",
            "120",
        ],
    },
    {
        question: "Which national anthem has no lyrics?",
        answers: [
            "The Soviet National Anthem",
            "The National Anthem of Madagascar",
            "The Spanish National Anthem",
        ],
        correct: "The Spanish National Anthem",
        incorrect: [
            "The Soviet National Anthem",
            "The National Anthem of Madagascar",
        ],
    },
];
// created a function for count
// created a timer
function count() {
    var timer = setInterval(function () {
        timeleft--;
        counter.textContent = timeleft;
        if (timeleft < 0) {
            clearInterval(timer);
        }
    }, 1000);
}
function closefl() {
document.getElementById("magic").style.display= "none";
}

window.setTimeout(closefl, 1000)
function flash() {
    var mtimeleft = 1;
    var mtimer = setInterval(function () {
        if (mtimeleft === 1) {
            mtimeleft--;
        }
        else {
            clearInterval(mtimer);
            window.setTimeout("flashy")
        }
    })
}

// added a function to show current question and possible answers
function displayquestion() {
    quizcardel.innerHTML = "";
    var q = quizquestions[currentquestionindex];
    var qTitleEl = document.createElement("h1");
    qTitleEl.textContent = q.question;
    quizcardel.append(qTitleEl);


    // added a for loop to conatin logic fow question swaping and for having the logic of correct and wrong answers
    var answers = q.answers;
    for (var i = 0; i < answers.length; i++) {
        var answer = answers[i];
        var ansbutton = document.createElement("button");
        ansbutton.classList.add("button");
        ansbutton.textContent = answer;
        ansbutton.addEventListener("click", function (event) {
            var selectedanswer = event.target.textContent;
            if (selectedanswer === q.correct) {
                function correct() {
                    var response = document.createElement("p");
                    response.setAttribute("id","magic");
                    response.textContent = "Correct!";
                    quizcardel.append(response);
                    displayquestion();
                }
                correct();
            } else {
                function incorrect() {
                    timeleft = timeleft - 10;
                    var bad = document.createElement("p");
                    bad.textContent = "Incorrect!";
                    quizcardel.append(bad);
                }

                incorrect();
                flash();
            }
            currentquestionindex++;
            // displayquestion();
        });
        quizcardel.append(ansbutton);
    }
    // ansbutton.addEventListener("click", displayquestion(q.correct));
}
// added an event listener for starting the quiz
starti.addEventListener("click", function () {
    count()
    displayquestion()
}); 