const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
    {
        text: `Yes`
    },
    {
        text: `No`
    },
    {
        text: `Hello`
    },
    {
        text: `Goodbye`
    },
    {
        text: `Maybe`
    },
    {
        text: `I Don't Know`
    },
    {
        text: `I Think So`
    },
    {
        text: `I Have No Idea`
    },
    {
        text: `Please`
    },
    {
        text: `Thank You`
    },
    {
        text: `I Love You`
    },
    {
        text: `I Miss You`
    },
    {
        text: `Good Morning`
    },
    {
        text: `Goodnight`
    },
    {
        text: ``
    },
    {
        text: `0`
    },
    {
        text: `1`
    },
    {
        text: `2`
    },
    {
        text: `3`
    },
    {
        text: `4`
    },
    {
        text: `5`
    },
    {
        text: `6`
    },
    {
        text: `7`
    },
    {
        text: `8`
    },
    {
        text: `9`
    },
    {
        text: `10`
    },
    {
        text: `20`
    },
    {
        text: `30`
    },
    {
        text: `40`
    },
    {
        text: `50`
    },
    {
        text: `60`
    },
    {
        text: `70`
    },
    {
        text: `80`
    },
    {
        text: `90`
    },
    {
        text: ``
    },
    {
        text: `I Like It`
    },
    {
        text: `I Don't Like It`
    },
    {
        text: `I'm Hungry`
    },
    {
        text: `I'm Thirsty`
    },
    {
        text: `I'm Tired`
    },
    {
        text: `I'm Hot`
    },
    {
        text: `I'm Cold`
    },
    {
        text: `I Need The Bathroom`
    },
    {
        text: `I'm Scared`
    },
    {
        text: `I Don't Feel Good`
    },
    {
        text: `I Have Pain In My..`
    },
    {
        text: `Head`
    },
    {
        text: `Stomach`
    },
    {
        text: `Legs`
    },
    {
        text: `Arms`
    },
    {
        text: `Chest`
    },
    {
        text: `Feet`
    },
    {
        text: `Hands`
    },
    {
        text: ``
    },
    {
        text: `Where Is..`
    },
    {
        text: `How Is..`
    },
    {
        text: `Aleigha`
    },
    {
        text: `Kailey`
    },
    {
        text: `Paige`
    },
    {
        text: `RJ`
    },
    {
        text: `Coy`
    },
    {
        text: `Weston`
    },
    {
        text: `John`
    },
    {
        text: `Jesse`
    },
    {
        text: ``
    },
    {
        text: `Stop`
    },
    {
        text: `Be Quiet`
    },
    {
        text: `Come Here`
    },
    {
        text: `Go Away`
    },
    {
        text: `Can You`
    },
    {
        text: ``
    },
    {
        text: ``
    },
    {
        text: `I Am`
    },
    {
        text: `You Are`
    },
    {
        text: `He Is`
    },
    {
        text: `She Is`
    },
    {
        text: `They Are`
    },
    {
        text: `We Are`
    },
    {
        text: `This Is`
    },
    {
        text: `That Is`
    },
    {
        text: ``
    },
    {
        text: `Beautiful`
    },
    {
        text: `Horrible`
    },
    {
        text: `Funny`
    },
    {
        text: `Happy`
    },
    {
        text: `Sad`
    },
    {
        text: `Awesome`
    },
    {
        text: `Crazy`
    },
    {
        text: `Delicious`
    },
    {
        text: ``
    },
    {
        text: `I Need..`
    },
    {
        text: `I Want..`
    },
    {
        text: `I Have..`
    },
    {
        text: ``
    },
    {
        text: `Shower`
    },
    {
        text: `Bath`
    },
    {
        text: `Help`
    },
    {
        text: `Medicine`
    },
    {
        text: `To Go To The`
    },
    {
        text: ``
    },
    {
        text: `Store`
    },
    {
        text: `Doctors`
    },
    {
        text: `Post Office`
    },
    {
        text: ``
    },
    {
        text: `Happy Anniversary`
    },
    {
        text: `Merry Christmas`
    },
    {
        text: `Happy Birthday`
    },
];

data.forEach(createBox);

// Create speech boxes
function createBox(item) {
  const box = document.createElement('div');

  const { text } = item;

  box.classList.add('box');

  box.innerHTML = `
    <p class="info">${text}</p>
  `;

  box.addEventListener('click', () => {
    setTextMessage(text);
    speakText();

    // Add active effect
    box.classList.add('active');
    setTimeout(() => box.classList.remove('active'), 800);
  });

  main.appendChild(box);
}

// Init speech synth
const message = new SpeechSynthesisUtterance();

// Store voices
let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voices.forEach(voice => {
    const option = document.createElement('option');

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

// Set text
function setTextMessage(text) {
  message.text = text;
}

// Speak text
function speakText() {
  speechSynthesis.speak(message);
}

// Set voice
function setVoice(e) {
  message.voice = voices.find(voice => voice.name === e.target.value);
}

// Voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices);

// Toggle text box
toggleBtn.addEventListener('click', () =>
  document.getElementById('text-box').classList.toggle('show')
);

// Close button
closeBtn.addEventListener('click', () =>
  document.getElementById('text-box').classList.remove('show')
);

// Change voice
voicesSelect.addEventListener('change', setVoice);

// Read text button
readBtn.addEventListener('click', () => {
  setTextMessage(textarea.value);
  speakText();
});

getVoices();
