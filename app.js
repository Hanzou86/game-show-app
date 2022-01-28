const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startBtn = document.querySelector('.btn__reset');
const missed = 0;

const phrases = [
    'Life is like a box of chocolates',
    'Use the force Luke',
    'Go easy on the Pepsi Fuller',
    "I'll be back",
    'In space no one can hear you scream'
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
        console.log(letters[i]);
        matchLetter = (letters[i] === btn.textContent);
        if (letters[i].textContent === btn.textContent) {
            letters[i].parentNode.className = 'show';
            console.log('hello');
        }
    }
    return matchLetter;
}

qwerty.addEventListener('click', (event) => {
    const btn = event.target;
    if (btn.tagName === 'BUTTON') {
        checkLetter(btn);
        btn.className = 'chosen';
    }
})