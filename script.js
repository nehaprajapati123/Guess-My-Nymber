'use strict';

let score = 20;
let secreteNumber = Math.trunc(Math.random() * 20) + 1;


// message display function
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}

const numberText = function (value) {
    document.querySelector('.number').textContent = value

}

const numberStyle = function () {

}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);



    if (!guess) {
        displayMessage('No Number')

    }

    else if (guess === secreteNumber) {
        displayMessage('Correct Number')


        numberText(secreteNumber)


        document.querySelector('.highscore').textContent = score

        document.querySelector('body').style.backgroundColor = 'green'

        document.querySelector('.number').style.width = '#30rem'



    }

    else if (guess !== secreteNumber) {
        if (score > 1) {
            displayMessage((guess > secreteNumber) ? 'Too high' : 'Too Low')
            score--
            document.querySelector('.score').textContent = score
        } else {
            displayMessage('You loss the game')

            numberText(secreteNumber)

            document.querySelector('.score').textContent = 0

            document.querySelector('body').style.backgroundColor = 'red'
        }


    }

})


// Again button :- refresh: score , message , body color , number size , guess input, random no. ,    
document.querySelector('.again').addEventListener('click', function () {

    score = 20;
    document.querySelector('.score').textContent = 20

    secreteNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('start guessing...')
    document.querySelector('body').style.backgroundColor = '#222'

    document.querySelector('.number').style.width = '15remx'

    numberText("?")
    document.querySelector('.guess').value = ""
})


//  High score storing 
let highscore = 0
if (score > highscore) {
    highscore = score
    document.querySelector('.highscore').textContent = highscore
}
