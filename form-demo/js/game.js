let fname = ""

// function for the greet
function greet() {
    // grab the greet paragraph
    let greetParagraph = document.getElementById("greet");

    // get values from the form
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    // show the result
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname + "!";
}

// function to trivia game

function trivia() {
    let triviaAnswer = document.getElementById("trivia-answer");
    // get checked values from form
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    // decide what to "print"

    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Sweet tooth, eh?";
    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Rotten tuna, yuck!";
    } else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct!";
    }
}

// function to "two truths and a lie" game

function ttlie() {
    let ttlieAnswer = document.getElementById("two-truths-lie");
    // get checked values from form
    let japanSelected = document.getElementById("japan").checked;
    let picklesSelected = document.getElementById("pickles").checked;
    let dolphinSelected = document.getElementById("dolphin").checked;

    // decide what to "print"

    if (japanSelected) {
        ttlieAnswer.innerHTML = fname + ", you are wrong. I have visited Japan twice!";
    } else if (picklesSelected) {
        ttlieAnswer.innerHTML = fname + ", you are correct! Although I do hate peppers, I love pickles. So this is a lie!";
    } else if (dolphinSelected) {
        ttlieAnswer.innerHTML = fname + ", you are wrong! I actually do have this hidden talent!";
    }
}