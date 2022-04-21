// created var to select .timer timer text
var counter = document.querySelector(".timer");
// created a var for the quizcard
var quizcardel = document.querySelector(".quizcard");

var starti = document.querySelector(".startbutton");
// added a var for count
var timeleft = 60;

// var table= document.querySelector(".scoretable");

var highscorelink = document.querySelector(".lhighscore");
// added a var for placement of questions
var currentquestionindex = 0;

// var flashy = document.querySelector("#magic");
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
var timer
// created a function for count
// created a timer
function count() {
    timer = setInterval(function () {
        timeleft--;
        counter.textContent = timeleft;
        if (timeleft < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

// function flash() {
//     var mtimeleft = 1;
//     var mtimer = setInterval(function () {
//         if (mtimeleft === 1) {
//             mtimeleft--;
//         }
//         else {
//             clearInterval(mtimer);
//             closefl();
//         }
//     })
// }

// function closefl() {
// document.getElementById("magic").style.display = "none";
// }
// added a function to show current question and possible answers
function displayquestion() {
    quizcardel.innerHTML = "";
    var q = quizquestions[currentquestionindex];
    if (q >= quizquestions.length) {
        quizend()
    }
    var qTitleEl = document.createElement("h1");
    qTitleEl.textContent = q.question;
    quizcardel.append(qTitleEl);


    function correct() {
        var response = document.createElement("p");
        // response.setAttribute("id","magic");
        response.textContent = "Correct!";
        quizcardel.append(response);
        // displayquestion();
        console.log("correct");
    }
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
                correct();
            }
            else {
                function incorrect() {
                    timeleft = timeleft - 10;
                    var bad = document.createElement("p");
                    bad.textContent = "Incorrect!";
                    quizcardel.append(bad);
                }

                incorrect();
                // flash();
            }

            if (currentquestionindex === answers.length) {
                quizend()
            }
            currentquestionindex++;
            setTimeout(displayquestion, 1000)
            // displayquestion();
        });
        quizcardel.append(ansbutton);
    }
    // ansbutton.addEventListener("click", displayquestion(q.correct));
}
// created a new function that clears html and adds new page
function quizend() {
    // stopped timer
    clearInterval(timer);
    quizcardel.innerHTML = "";
    var scoretitle = document.createElement("h1");
    var score = document.createElement("h2");
    var scoreform = document.createElement("form");
    var tabledir = document.createElement("h2");
    var scorelabel = document.createElement("input");
    var table = document.createElement("div");
    var submitBtn = document.createElement("button");
    table.setAttribute("id", "Highscoretable");
    submitBtn.setAttribute("id", "Submitt");
    scoretitle.textContent = "Thank You for Participating!";
    score.textContent = "Your score is " + timeleft;
    tabledir.textContent = "Enter your initials below!";
    submitBtn.textContent = "Submit!"
    quizcardel.append(scoretitle);
    quizcardel.append(score);
    quizcardel.append(tabledir);
    quizcardel.append(scoreform);
    scoreform.append(scorelabel);
    quizcardel.append(table);
    quizcardel.append(submitBtn)
    // added a nested function to for submiting for to local storage
    function savescore() {
        var initials = scorelabel.value.trim();
        if (initials !== "") {
            var playerscores = JSON.parse(window.localStorage.getItem("playerscores")) || [];
            // sets up format for new user
            var newscore = {
                score: timeleft,
                initials: initials,
            };
            // saved to local storage
            playerscores.push(newscore);
            window.localStorage.setItem("playerscores", JSON.stringify(playerscores));

        }
    }
    submitBtn.addEventListener("click", function () {
        savescore()
    });
}

// added an event listener for starting the quiz
starti.addEventListener("click", function () {
    count()
    displayquestion()
});

highscorelink.addEventListener("click", quizend)