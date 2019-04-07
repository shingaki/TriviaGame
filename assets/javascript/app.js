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
var wins = 0;
var losses = 0;
var unanswered = 0;
var QID;
var numberOfAnswers = 4;
var resultAnswer;

var youWonMessage = "You Won";
var youLostMessage = "Nope!";
var timesUp = 'Time is Up!'

var charImage;


function startTimer()
{
    intervalID = setInterval(count, 1000);
}

function count() {
    time--;

    var converted = timeConverter(time);
    console.log(converted);

    $('#timer').text(converted);
}

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - minutes * 60;""
    return seconds;
}

// randomly select one of the Movies
function getRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 10);

    if (trivaInput[randomNumber].used === 'Y') {
        getRandomNumber();
    }

    return randomNumber;
}


function getQuestionAndAnswers()
{
    // put the randomNumber into the QID to be used as the iterator
    QID = getRandomNumber();

    // set that the question has been used
    trivaInput[QID].used = "Y";

    // put the answers into the tags and the hover
    $("#question").replaceWith(trivaInput[QID].question);
    $("#question").addClass("question-style");

    // display the answers for the questions on the page

    for (var i = 0; trivaInput[QID].answer.length >= i; i++) {

        $("#answer" + i).replaceWith(trivaInput[QID].answer[i])
        $("#col-answer-" + i).addClass("answer-style answer-border");

    }

}


function resetPage()
{
    var wins = 0;
    var losses = 0;
    var unanswered = 0;

    // set all used = N
}

function checkIfCorrect(answerID)
{

    console.log("answerID " + answerID);
    console.log("QID " + QID);

    console.log(trivaInput[QID].status[answerID]);
        if (trivaInput[QID].status[answerID] === "C") {
            console.log("the answer is right " + trivaInput[QID].status[answerID])
            $("#row-question").empty();
            $("#row-0").empty();
            $("#row-1").empty();
            wins = wins + 1;
            charImage = $("<img>");
            charImage.attr("src", "./assets/images/" + trivaInput[QID].image);
            console.log("image 1 = " + trivaInput[QID].image);
            console.log("image = " + charImage);
            $("#row-question").replaceWith("YOU WON!!!");
            $("#row-0").append(charImage);


        } else if (trivaInput[QID].status[answerID] === "W")
        {
            console.log("this answer is WRONG " + trivaInput[QID].status[answerID]);
            $("#row-question").empty();
            $("#row-0").empty();
            $("#row-1").empty();
            losses = losses + 1;
            charImage = $("<img>");
            charImage.attr("src", "./assets/images/" + trivaInput[QID].image);
            console.log("image 1 = " + trivaInput[QID].image);
            console.log("image = " + charImage);
            $("#row-question").replaceWith("YOU LOST!!");
            $("#row-0").append(charImage);



        }
}

// start button is clicked
$("#start-button").on("click", function() {
    $("#start-button").addClass("hide-button");
    startTimer();
    getQuestionAndAnswers();


    // check if timer is 0 or click event happened

    $("#col-answer-0").on("click", function () {
        checkIfCorrect(0);
    })

    $("#col-answer-1").on("click", function () {
        checkIfCorrect(1);
    })

    $("#col-answer-2").on("click", function () {
        checkIfCorrect(2);
    })

    $("#col-answer-3").on("click", function () {
        checkIfCorrect(3);
    })
} )









// set the page initially
// click on 'Start'
// get random number
// use random number - update that the question has been used
// get the question and answer to display on the page
// start the clock
// if wrong answer
// stop clock
// increment losses by 1
// show the image of the right answer
// show the right answer
// wait 5 seconds
// check if last question
// if not last question - then get the next random number and repeat
// if last number then set the page to show the losses, wins, unanswered and the restart button
// if restart button pushed
// clear out the variables
// start the clock
// randomluy select the next question












// console.log(trivaInput[0]);
// console.log(trivaInput[0].question);
//
// console.log(trivaInput[1]);

console.log(trivaInput[0].questionId);
console.log(trivaInput.length);

