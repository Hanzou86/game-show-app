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


    function getRandomPhraseAsArray(arr) {
        const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
        const phraseArr = randomPhrase.split('');
        return phraseArr
    }

    function addPhraseToDisplay(arr) {
        for (let i = 0; i < arr.length; i++) {
            const phraseArr = getRandomPhraseAsArray(arr[i])
            return phraseArr;
        }
    }

});