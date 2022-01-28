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
                li.textContent = character;
                if (character === ' ') {
                    li.className = 'space';
                } else {
                    li.className = 'letter';
                }
                phraseUl.append(li);
                console.log(li);
            }
        
    }
    addPhraseToDisplay(phrases);

});



qwerty.addEventListener('change', (event) => {
    const btn = event.target;
    if (btn.tagName === 'BUTTON') {
        function checkLetter(btn) {
            const letters = document.querySelectorAll('.letter');
            for (let i = 0; i < letters.length; i++) {
                if (letters[i] === btn.textContent) {
                    const matchLetter = letters[i] === btn.textContent;
                    matchLetter.parentNode.className = 'show';
                    return matchLetter;
                } else {
                    return null;
                }
            }
        }
        btn.className = 'chosen';
        checkLetter(btn);
    }
})