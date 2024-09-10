console.log('Game ON')
// alert('Get ready to be SCRAMBLED ')
const button = document.querySelector('button')
const section = document.querySelector('section')
const blocks = document.querySelectorAll('.blocks div')
const input = document.querySelector('#text-input')
const playerInput = []

const entWords = []

// let clicks = 0
// const colors = [
//   'black',
//   'red',
//   'yellow',
//   'blue',
//   'pink',
//   'aqua',
//   'orange',
//   'green'
// ]

// button.addEventListener('click', changeClass)

// {
//   word: 'Harry'
// }

const gameBox = document.querySelector('Letters')

const harryWords = ['LUMOS', 'WITCH', 'MAGIC', 'SNAPE', 'MOODY']

const currentWord = ''

const starWords = ['DARTH', 'FORCE', 'ANAKIN', 'SNAPE', 'MOODY']

function shuffle(charecters) {
  const letters = charecters.split('')
  for (let i = letters.length - 1; i > 0; i--) {
    const randLetter = Math.floor(Math.random() * (i + 1))

    const shuffle = letters[i]
    letters[i] = letters[randLetter]
    letters[randLetter] = shuffle
    console.log(shuffle)
  }

  // Hafsa assisted on this to make me understand it further ^^

  for (let i = 0; i < charecters.length; i++) {
    blocks[i].innerHTML = letters[i]

    // if (i < harryWords) {
    //   // blocks[i].innerHTML = letters[i]
    // } else {
    //   blocks[i].innerHTML = letters[i]
    // }
  }
}
function checkGuess() {
  const playerInput = document.getElementById('text-input')
  // in this function i asked chatGPT to elaborate the process i must follow to eventually get the result and the answer was basically all the steps i have done already then finally the checking part which i was missing
  const resultBox = document.getElementById('result-word')
  const inputTest = playerInput.value
  if (inputTest === harryWords[random].toString()) {
    console.log(inputTest)
    // console.log(resultBox)
  }
// }
// function searchWord() {
//   random = []
//   push.random(entWords)
// }

// const checkGuess = () => {
//   if (playerInput[0] === charecters.length) {
//     console.log(correct)
//   } else {
//   }
// }

let random = Math.floor(Math.random() * harryWords.length)
let randomWord = harryWords[random]
shuffle(randomWord)

// add here an empty array to not repeate the word twice

// function check() {
//   let input = document.getElementById('input')
//   let output = document.getElementById('output')

//   if (input.value.toLocaleLowerCase() === displayWord.toLocaleLowerCase())
//     output.innerHTML = 'Result: Correct'
//   else output.innerHTML = 'Result: Incorrect'
//   console.log('this works')
// }

// // console.log(harryWords[random])
// var countDownDate = new Date('0:25').getTime()
// var distance = countDownDate - now
// var seconds = Math.floor((distance % (1000 * 60)) / 1000)
