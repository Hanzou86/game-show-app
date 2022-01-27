const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startBtn = document.querySelector('.btn__reset');

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

    function addPhraseToDisplay(arr) {
            const phraseUl = document.querySelector('#phrase ul');
            const li = document.createElement('li');
            const phraseArr = getRandomPhraseAsArray(arr);
            for (let i = 0; i < phraseArr.length; i++) {
                const character = phraseArr[i];
                if (character === ' ') {
                    character.className = 'space';
                } else {
                    character.className = 'letter';
                }
                li.textContent = character;
                phraseUl.appendChild(li);
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
                    letters[i].parentNode.className = 'show';
                } else {
                    return null;
                }
            }
        }
        btn.className = 'chosen';
        checkLetter(btn);
    }
})