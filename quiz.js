var timer = document.querySelector(".timer");

var quizcardel = document.querySelector(".quizcard");

var timeleft = 60;
var currentquestionindex = 0;
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
    }
    {
        question: "What national anthem has no lyrics?",
        answers: [
            
        ]
    }
]