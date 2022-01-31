const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startBtn = document.querySelector('.btn__reset');
let missed = 0;

const phrases = [
    'life is like a box of chocolates',
    'use the force luke',
    'go easy on the pepsi fuller',
    "i will be back",
    'in space no one can hear you scream'
]

startBtn.addEventListener('click', (event) => {
    const startScreen = document.getElementById('overlay');

    startScreen.style.display = 'none';

    function getRandomPhraseAsArray(arr) {
        const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
        const phraseArr = randomPhrase.split('');
        return phraseArr
    }
    getRandomPhraseAsArray(phrases);

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
    addPhraseToDisplay(phrases);

});

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

qwerty.addEventListener('click', (event) => {
    const btn = event.target;
    if (btn.tagName === 'BUTTON') {
        const tries = document.querySelectorAll('.tries');
        const letterFound = checkLetter(btn);
        letterFound;
        console.log(letterFound);
        if (letterFound === null) {
            for (let i = 0; i < tries.length; i++) {
                if (tries[i].firstChild.src === 'images/lostHeart.png') {
                    tries[i].nextSibling.firstChild.src = 'images/lostHeart.png';
                    break;
            }
        }
            tries[0].firstChild.src = 'images/lostHeart.png';
            missed+= 1;
            }
        
        btn.className = 'chosen';
        btn.disabled = true;
    }
})