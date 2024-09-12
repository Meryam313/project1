console.log('Game ON')
// alert('Get ready to be SCRAMBLED ')
const button = document.querySelector('button')
const section = document.querySelector('section')
const blocks = document.querySelectorAll('.blocks div')
const input = document.querySelector('#text-input')
const playerInput = []
let duplicate = []

const entWords = []

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

  // Hafsa assisted on this to make me understand .  it further ^^

  for (let i = 0; i < charecters.length; i++) {
    blocks[i].innerHTML = letters[i]
  }
}
function checkGuess() {
  const playerInput = document.getElementById('text-input')
  // in this function i asked chatGPT to elaborate the process i must follow to eventually get the result and the answer was basically all the steps i have done already then finally the checking part which i was missing
  const resultBox = document.getElementById('result-word')
  const inputTest = playerInput.value
  if (inputTest === harryWords[random].toString()) {
    console.log(inputTest)
    alert('Correct')

    // console.log(resultBox)
  }
  console.log('checked')
}

function searchWord() {}

let randomWord = ''
let random = ''
function randomiseAndCheckDuplicate() {
  random = Math.floor(Math.random() * harryWords.length)
  randomWord = harryWords[random]
  console.log('randomWord', randomWord)

  // console.log(duplicate.find(randomWord))
  const found = duplicate.find((e) => e == randomWord)
  console.log(found)

  if (!found) {
    duplicate.push(randomWord)
    console.log('duplicate', duplicate)
    console.log(duplicate.length)
    console.log(harryWords.length)
    if (duplicate.length == harryWords.length) {
      // Empty the duplicate array
      duplicate = []
      // Write the logic for another level
      location.replace('level2.html')
    }
  } else {
    randomiseAndCheckDuplicate()
  }
  shuffle(randomWord)
}

randomiseAndCheckDuplicate()

document.getElementById('next-word').addEventListener('click', () => {
  console.log('Next button clicked')
  randomiseAndCheckDuplicate()
})
