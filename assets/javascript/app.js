// STOPWATCH ACTIVITY (SOLUTION)
// =============================

// This code will run as soon as the page loads
window.onload = function() {
    $('#start').on('click', startTimer);
};

var trivaInput =
    [
        {
            questionId: 0,
            question: "Who is the youngest child on Bob’s Burgers?",
            answer: ["Louise", "Tina", "Gene", "Linda"],
            status: ["C", "W", "W", "W"],
            used: "N",
            image: "louise.png"
        },
        {
            questionId: 1,
            question: "Who did Stewie want to kill in the first season of ‘Family Guy’?",
            answer: ["Meg", "Chris", "Peter", "Lois"],
            status: ["W", "W", "W", "C"],
            used: "N",
            image: "lois.png"
        },
        {
            questionId: 2,
            question: "What is the name of the boy band Tina is obsessed with in ‘Bob’s Burgers’?",
            answer: ["Boys To Men", "One Direction", "Boyz 4 Now", "Nsync"],
            status: ["W", "W", "C", "W"],
            used: "N",
            image: "boyz_for_now.png",
        },
        {
            questionId: 3,
            question: "What is the name of the dog in ‘The Simpsons’?",
            answer: ["Pluto", "Santa’s Little Helper", "Goofy", "Lassie"],
            status: ["W", "C", "W", "W"],
            used: "N",
            image: "simpsons_dog.png"
        },
        {
            questionId: 4,
            question: "What is Homer Simpson’s favorite food?",
            answer: ["Pizza", "Beer", "Donuts", "Hot Dog"],
            status: ["W", "W", "C", "W"],
            used: "N",
            image: "donuts.png"
        },
        {
            questionId: 5,
            question: "Who voices the character Meg on the Family Guy?",
            answer: ["Mila Kunis", "Lacey Chabert", "a and b", "None of the above"],
            status: ["W", "W", "C", "W"],
            used: "N",
            image: "voiceOfMeg.png"
        },
        {
            questionId: 6,
            question: "Who is Bob’s biggest competition in Bob’s Burgers?",
            answer: ["Jimmy Pesto", "Joe Dirt", "Paul Pasta", "Hal Burger"],
            status: ["C", "W", "W", "W"],
            used: "N",
            image: "jimmyPesto.png"
        },
        {
            questionId: 7,
            question: "What does Bart Simpson use to get around?",
            answer: ["Scooter", "Bike", "Skateboard", "Uber"],
            status: ["W", "W", "C", "W"],
            used: "N",
            image: "bartSimpsonSkateboard.png"
        },
        {
            questionId: 8,
            question: "Where does Peter Griffin work in Family Guy?",
            answer: ["Walmart", "A Brewery", "A Toy Factory", "The Police Station"],
            status: ["W", "C", "W", "W"],
            used: "N",
            image: "theBrewery.png"
        },
        {
            questionId: 9,
            question: "Which character’ is famous for the saying “eat my shorts!",
            answer: ["Bart Simpson", "Gene", "Brian", "Cartman"],
            status: ["C", "W", "W", "W"],
            used: "N",
            image: "eatMyShorts.png"
        },

    ]


var intervalID;
var time = 30;
// var time = 10;
var wins = 0;
var losses = 0;
var unanswered = 0;
var QID;
var numberOfQuestions = 0;
// var numberOfQuestions = 8;


var correctAnswer = "";
var clockRunning = false;


var charImage;


function startTimer()
{
    intervalID = setInterval(count, 1000);
    clockRunning = true;
}

function count() {
    time--;

    var converted = timeConverter(time);

    if (converted === 0)
    {
        stop();
        time = 30;
        // time = 10;

        $("#row-one").empty();
        $("#row-two").empty();
        $("#row-three").empty();
        $("#row-four").empty();
        $("#row-five").empty();


        $("#timer").text("Time Remaining: " + time + " Seconds");


        unanswered = unanswered + 1;
        charImage = $("<img>");
        charImage.attr("src", "./assets/images/" + trivaInput[QID].image);
        charImage.addClass("image-answer");

        for (var i = 0; trivaInput[QID].status.length > i; i++)
        {
            if (trivaInput[QID].status[i] === "C")
            {
                correctAnswer = (trivaInput[QID].answer[i]);
            }
        }



        $("#row-one").append("TIME IS OUT " + correctAnswer);
        $("#row-two").append(charImage);


        setTimeout(nextQuestion, 1000 * 5);

    }

    $("#timer").text("Time Remaining: " + converted + " Seconds");
}

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - minutes * 60;""
    return seconds;
}

function stop() {

    clearInterval(intervalID);
    clockRunning = false;
}

// randomly select one of the Movies
function getRandomNumber() {
    var randomNumber;

    randomNumber = Math.floor(Math.random() * 10);
    0

    if (trivaInput[randomNumber].used === "Y") {
        getRandomNumber();
    }
    else {
        trivaInput[randomNumber].used = "Y";
        QID = randomNumber;

    }

}


function getQuestionAndAnswers()
{

    // put the randomNumber into the QID to be used as the iterator
    getRandomNumber();

    // set that the question has been used
    numberOfQuestions = numberOfQuestions + 1;

    $("#row-one").text("");
    $("#row-two").text("");
    $("#row-three").text("");


    var question = $("<div>");
    question.addClass("question-style col-md-10 text-center");
    question.text(trivaInput[QID].question);
    $("#row-one").append(question);

    var answerOne = $("<div>");
    answerOne.addClass("answer-style answer-border col-md-10 text-center");
    answerOne.text(trivaInput[QID].answer[0]);
    $("#row-two").append(answerOne);

    var answerTwo = $("<div>");
    answerTwo.addClass("answer-style answer-border col-md-10 text-center");
    answerTwo.text(trivaInput[QID].answer[1]);
    $("#row-three").append(answerTwo);

    var answerThree = $("<div>");
    answerThree.addClass("answer-style answer-border col-md-10 text-center");
    answerThree.text(trivaInput[QID].answer[2]);
    $("#row-four").append(answerThree);

    var answerFour = $("<div>");
    answerFour.addClass("answer-style answer-border col-md-10 text-center");
    answerFour.text(trivaInput[QID].answer[3]);
    $("#row-five").append(answerFour);



}

function gameOver()
{
    $("#row-one").empty();
    $("#row-two").empty();
    $("#row-three").empty();
    $("#row-four").empty();
    $("#row-five").empty();

    var textWins = "Wins: " + wins;
    var textLoss = "Losses: " + losses;
    var textUnanswered = "Unanswered " + unanswered;

    var showWins = $("<div>");
    showWins.addClass("answer-style col-md-10 text-center");
    showWins.text(textWins);
    $("#row-three").append(showWins);

    var showLosses = $("<div>");
    showLosses.addClass("answer-style col-md-10 text-center");
    showLosses.text(textLoss);
    $("#row-four").append(showLosses);

    var showUnanswered = $("<div>");
    showUnanswered.addClass("answer-style col-md-10 text-center");
    showUnanswered.text(textUnanswered);
    $("#row-five").append(showUnanswered);


}

function resetGame()
{

    console.log("reset the Game");
    wins = 0;
    losses = 0;
    unanswered = 0;



    $("#row-one").empty();
    $("#row-two").empty();
    $("#row-three").empty();
    $("#row-four").empty();
    $("#row-five").empty();

    $("#start-button").addClass("show-button");

    for (var i = 0; trivaInput.length > i; i++)
    {
        trivaInput[i].used = "N";
    }

    numberOfQuestions = 0;
    time = 10;
}

function checkIfCorrect(answerID)
{


    if (trivaInput[QID].status[answerID] === "C") {
        wins = wins + 1;
        charImage = $("<img>");
        charImage.attr("src", "./assets/images/" + trivaInput[QID].image);
        charImage.addClass("image-answer");

        $("#row-one").empty();
        $("#row-two").empty();
        $("#row-three").empty();
        $("#row-four").empty();
        $("#row-five").empty();


        $("#row-one").append("CORRECT!!!");
        $("#row-two").append(charImage);

        setTimeout(nextQuestion, 1000 * 5);


    } else if (trivaInput[QID].status[answerID] === "W")
    {
        correctAnswer = "";
        losses = losses + 1;
        charImage = $("<img>");
        charImage.attr("src", "./assets/images/" + trivaInput[QID].image);
        charImage.addClass("image-answer");

        for (var i = 0; trivaInput[QID].status.length > i; i++)
        {
            if (trivaInput[QID].status[i] === "C")
            {
                correctAnswer = (trivaInput[QID].answer[i]);
            }
        }

        $("#row-one").empty();
        $("#row-two").empty();
        $("#row-three").empty();
        $("#row-four").empty();
        $("#row-five").empty();


        $("#row-one").append("NOPE! The right answer is " + correctAnswer);
        $("#row-two").append(charImage);


        setTimeout(nextQuestion, 1000 * 5);




    }
}

// start button is clicked
$("#start-button").on("click", function() {
    $("#start-button").addClass("hide-button");


    $("#start-button").removeClass("show-button");

    console.log("Start-Button was Clicked Again")

    startTimer();
    getQuestionAndAnswers();


    // check if timer is 0 or click event happened
    $("#row-two").on("click", function () {
        stop();
        checkIfCorrect(0);
    })

    $("#row-three").on("click", function () {
        stop();
        checkIfCorrect(1);
    })

    $("#row-four").on("click", function () {
        stop();
        checkIfCorrect(2);
    })

    $("#row-five").on("click", function () {
        stop();
        checkIfCorrect(3);
    })
} )


function nextQuestion()
{



    if (numberOfQuestions === trivaInput.length)
    {
        gameOver();
        console.log("after game is over");
        setTimeout(resetGame, 1000 * 5);

    } else {

        time = 30;
        // time = 10;
        $("#row-one").empty();
        $("#row-two").empty();
        $("#row-three").empty();
        $("#row-four").empty();
        $("#row-five").empty();

        $('#timer').text("Time Remaining: " + time + " Seconds");


        startTimer();
        getQuestionAndAnswers();


        // check if timer is 0 or click event happened

        // if (time === 0) {
        //     console.log("TIME IS OUT");
        // }

        $("#col-answer-0").on("click", function () {
            stop();
            checkIfCorrect(0);
        })

        $("#col-answer-1").on("click", function () {
            stop();
            checkIfCorrect(1);
        })

        $("#col-answer-2").on("click", function () {
            stop();
            checkIfCorrect(2);
        })

        $("#col-answer-3").on("click", function () {
            stop();
            checkIfCorrect(3);
        })
    }
}






















