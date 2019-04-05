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
            answer1: "Louise",
            answer2: "Tina",
            answer3: "Gene",
            answer4: "Linda",
            status1: "C",
            status2: "W",
            status3: "W",
            status4: "W",
            used: "N",
            image: "louise.png"
        },
        {
            questionId: 1,
            question: "Who did Stewie want to kill in the first season of ‘Family Guy’?",
            answer1: "Meg",
            answer2: "Chris",
            answer3: "Peter",
            answer4: "Lois",
            status1: "W",
            status2: "W",
            status3: "W",
            status4: "C",
            used: "N",
            image: "lois.png"
        },
        {
            questionId: 2,
            question: "What is the name of the boy band Tina is obsessed with in ‘Bob’s Burgers’?",
            answer1: "Boys To Men",
            answer2: "One Direction",
            answer3: "Boyz 4 Now",
            answer4: "Nsync",
            status1: "W",
            status2: "W",
            status3: "C",
            status4: "W",
            used: "N",
            image: "boyz-for-now.png",
        },
        {
            questionId: 3,
            question: "What is the name of the dog in ‘The Simpsons’?",
            answer1: "Pluto",
            answer2: "Santa’s Little Helper",
            answer3: "Goofy",
            answer4: "Lassie",
            status1: "W",
            status2: "C",
            status3: "W",
            status4: "W",
            used: "N",
            image: "simpsons_dog.png"
        },
        {
            questionId: 4,
            question: "What is Homer Simpson’s favorite food?",
            answer1: "Pizza",
            answer2: "Beer",
            answer3: "Donuts",
            answer4: "Hot Dog",
            status1: "W",
            status2: "W",
            status3: "C",
            status4: "W",
            used: "N",
            image: "donuts.png"
        },
        {
            questionId: 5,
            question: "Who voices the character Meg on the Family Guy?",
            answer1: "Mila Kunis",
            answer2: "Lacey Chabert",
            answer3: "a and b",
            answer4: "None of the above",
            status1: "W",
            status2: "W",
            status3: "C",
            status4: "W",
            used: "N",
            image: "voiceOfMeg.png"
        },
        {
            questionId: 6,
            question: "Who is Bob’s biggest competition in Bob’s Burgers?",
            answer1: "Jimmy Pesto",
            answer2: "Joe Dirt",
            answer3: "Paul Pasta",
            answer4: "Hal Burger",
            status1: "C",
            status2: "W",
            status3: "W",
            status4: "W",
            used: "N",
            image: "jimmyPesto.png"
        },
        {
            questionId: 7,
            question: "What does Bart Simpson use to get around?",
            answer1: "Scooter",
            answer2: "Bike",
            answer3: "Skateboard",
            answer4: "Uber",
            status1: "W",
            status2: "W",
            status3: "C",
            status4: "W",
            used: "N",
            image: "bartSimpsonSkateboard.png"
        },
        {
            questionId: 8,
            question: "Where does Peter Griffin work in Family Guy?",
            answer1: "Walmart",
            answer2: "A Brewery",
            answer3: "A Toy Factory",
            answer4: "The Police Station",
            status1: "W",
            status2: "C",
            status3: "W",
            status4: "W",
            used: "N",
            image: "theBrewery"
        },
        {
            questionId: 9,
            question: "Which character’ is famous for the saying “eat my shorts!",
            answer1: "Bart Simpson",
            answer2: "Gene",
            answer3: "Brian",
            answer4: "Cartman",
            status1: "C",
            status2: "W",
            status3: "W",
            status4: "W",
            used: "N",
            image: "eatMyShorts.png"
        },

    ]


    var intervalID;
    var time = 30;
    var wins = 0;
    var loses = 0;
    var unanswered = 0;

    var youWonMessage = "You Won";
    var youLostMessage = "Nope!";
    var timesUp = 'Time is Up!'


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
        var seconds = t - minutes * 60;
            return seconds;
    }

// randomly select one of the Movies
    function getRandomNumber() {
        var randomNumber = Math.floor(Math.random() * 10);

        return randomNumber;
    }


function getQuestionAndAnswers()
{
    var QID = getRandomNumber();
            $('#question').replaceWith(trivaInput[QID].question);
            $('#answer1').replaceWith(trivaInput[QID].answer1);
            $('#answer2').replaceWith(trivaInput[QID].answer2);
            $('#answer3').replaceWith(trivaInput[QID].answer3);
            $('#answer4').replaceWith(trivaInput[QID].answer4);
        // put question on the page
        // put answers on the page
        // start the clock
}

getQuestionAndAnswers();



    var QID = getRandomNumber();
    console.log("Random Number " + QID);


$('#answer1').text("Answer One");
$('#answer2').text("Answer Two");
$('#answer3').text("Answer Three");
$('#answer4').text("Answer Four");




function resetPage()
{
    var wins = 0;
    var loses = 0;
    var unanswered = 0;

    // set all used = N

}





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

