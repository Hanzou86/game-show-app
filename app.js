const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startBtn = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const tries = document.querySelectorAll('.tries img');
const resetBtn = document.createElement('button');
let missed = 0;

const phrases = [
    'life is like a box of chocolates',
    'use the force luke',
    'go easy on the pepsi fuller',
    "i will be back",
    'in space no one can hear you scream'
]

function getRandomPhraseAsArray(arr) {
    const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    const phraseArr = randomPhrase.split('');
    return phraseArr
}

function addPhraseToDisplay(arr) {
    const phraseUl = document.querySelector('#phrase ul');
    const li = document.createElement('li');
    const phraseArr = getRandomPhraseAsArray(arr);
    for (let i = 0; i < phraseArr.length; i++) {
        const character = phraseArr[i];
        const li = document.createElement('li');
        li.textContent = character;
        if (character === ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
        phraseUl.append(li);
    }

}



function checkLetter(btn) {
    const letters = document.querySelectorAll('.letter');
    let matchLetter = null;
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].textContent === btn.textContent) {
            matchLetter = (letters[i] === btn.textContent);
            letters[i].className += ' show';
        }
    }
    return matchLetter;
}



function checkWin() {
    const lettersShow = document.querySelectorAll('.show');
    const letters = document.querySelectorAll('.letter');
    const h2 = document.createElement('h2');
    h2.className = 'result';
    if (lettersShow.length === letters.length) {
        overlay.style.display = 'initial';
        overlay.className = 'win';
        overlay.insertBefore(h2, startBtn);
        h2.textContent = 'You Win!';
        startBtn.textContent = 'Reset';
        startBtn.addEventListener('click', (event) => {
            resetGame()
        })
    } else {
        if (missed >= 5) {
            overlay.style.display = 'initial';
            overlay.className = 'lose';
            overlay.insertBefore(h2, startBtn);
            h2.textContent = 'You Lost :(';
            startBtn.textContent = 'Reset';
            startBtn.addEventListener('click', (event) => {
                resetGame()
            })
        }
    }
}



function resetGame() {
    const phraseLi = document.querySelectorAll('#phrase ul li');
    const tries = document.querySelectorAll('.tries img');
    const qwertyBtn = document.querySelectorAll('#qwerty .keyrow button');
    const result = document.querySelector('.result');
    for (let i = 0; i < phraseLi.length; i++) {
        phraseLi[i].remove(phraseLi[i]);
    }
    for (let i = 0; i < qwertyBtn.length; i++) {
        qwertyBtn[i].className = ''; 
        qwertyBtn[i].disabled = false;
    }
    for (let i = 0; i < tries.length; i++) {
        tries[i].src = 'images/liveHeart.png'; 
    }
    overlay.style.display = 'none';
    result.remove(result);
    missed = 0;
    addPhraseToDisplay(phrases)

}

//Starts Game

startBtn.addEventListener('click', (event) => {
    overlay.style.display = 'none';
    getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phrases);
});

//Displays letters and checks for win or loss

qwerty.addEventListener('click', (event) => {
    const btn = event.target;
    if (btn.tagName === 'BUTTON') {
        const letterFound = checkLetter(btn);
        letterFound;
        if (letterFound === null) {
            tries[missed].src = 'images/lostHeart.png';
            missed++;
            }
        btn.className = 'chosen';
        btn.disabled = true;
        checkWin();
        }
})




