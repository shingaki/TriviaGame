// STOPWATCH ACTIVITY (SOLUTION)
// =============================

// This code will run as soon as the page loads
window.onload = function() {

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
                answer: ["Meg","Chris","Peter","Lois"],
                status: ["W", "W", "W", "C"],
                used: "N",
                image: "lois.png"
            },
        ]
    console.log("trivaInput " +  trivaInput[0].answer[0]);
    console.log("trivaInput " +  trivaInput[0].answer[1]);
    console.log("trivaInput " +  trivaInput[0].answer[2]);
    console.log("trivaInput " +  trivaInput[0].answer[3]);




};


















// console.log(trivaInput[0]);
// console.log(trivaInput[0].question);
//
// console.log(trivaInput[1]);

// console.log(trivaInput[0].questionId);
// console.log(trivaInput.length);

