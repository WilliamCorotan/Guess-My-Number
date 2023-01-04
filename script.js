'use strict';

const number = document.querySelector('.number')
const message = document.querySelector('.message')
const highscore = document.querySelector('.highscore')
const scoreDisplay = document.querySelector('.score')
const again = document.querySelector('.again')
const body = document.querySelector('body')
let secretNumber = Math.trunc(Math.random()* 20)  + 1
let score = 20
let currentHighscore = 0

const displayScore = (sc) => {
  scoreDisplay.textContent = sc
}

const displayMessage = (text) => {
  message.textContent = text
}

const tryAgain = () => {
  secretNumber = Math.trunc(Math.random()* 20)  + 1
  body.style.backgroundColor = '#222'
  displayMessage('Start guessing...')
  number.textContent = '?'
  number.style.width = '15rem'
  score = 20
  displayScore(score)
}

const check = () => {
  var guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess)

if(!guess){
  displayMessage('No number')
}
else if(guess && highscore !== score) {
    if(guess === secretNumber){
      displayMessage('You Won!')
      body.style.backgroundColor = '#60b347'
      number.style.width = '30rem'
      number.textContent = secretNumber
      if(score > currentHighscore){
        currentHighscore = score
        highscore.textContent = currentHighscore
      }
    
    }
    else if(guess !== secretNumber && score > 1){
      score--
      displayScore(score)
      displayMessage((guess > secretNumber) ? 'Too High' : 'Too Low')
    }
    else{
      score = 0
      displayScore(score)
      displayMessage('Game Over!')
      body.style.backgroundColor = '#dc143c'
    }
}
}
