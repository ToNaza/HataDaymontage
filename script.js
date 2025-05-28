const image = document.getElementById('animatedImage');
const audio = document.getElementById('sound');
let clicked = false;

// Налаштовувані моменти зміни зображення (в мілісекундах)
const imageChanges = [
  { time: 100, src: "./media/Day1.png" },
  { time: 200, src: "./media/Day2.png" },
  { time: 1900, src: "./media/Day1.png" },
  { time: 2300, src: "./media/Day2.png" },
  { time: 2600, src: "./media/Day1.png" },
  { time: 3000, src: "./media/Day2.png" },
  { time: 3400, src: "./media/Day1.png" },
  { time: 3900, src: "./media/Day2.png" },
  { time: 7000, src: "./media/Day1.png" },
  { time: 8000, src: "./media/Day2.png" },
  { time: 10500, src: "./media/Day1.png" },
];

image.addEventListener('click', () => {
  if (clicked); // щоб лише один раз
  clicked = true;

  audio.play();

  imageChanges.forEach(change => {
    setTimeout(() => {
      image.src = change.src;
    }, change.time);
  });
});















const fonts = [
    '"Kalam", cursive',
    '"Jura", sans-serif',
    '"Roboto Mono", monospace',
    '"Pacifico", cursive',
    '"Anton", sans-serif'
  ];

  let index = 0;
  const text = document.getElementById('changingText');

  setInterval(() => {
    // Зникання
    text.style.opacity = 0;

    setTimeout(() => {
      // Зміна шрифту, коли текст "невидимий"
      text.style.fontFamily = fonts[index];
      // Поява
      text.style.opacity = 1;

      // Наступний індекс
      index = (index + 1) % fonts.length;
    }, 500); // час має збігатися з transition: opacity
  }, 2000); // зміна кожні 2 секунди

















const music = document.getElementById("music");
const toggleMusicBtn = document.getElementById("toggleMusic");
const petBtn = document.getElementById("pet");
const petSound = document.getElementById("petSound");
const specialSound = document.getElementById("specialSound");
const overlay = document.getElementById("overlay");

let musicPlaying = false;
let petClickCount = 0;
let clickTimer = null;

toggleMusicBtn.onclick = () => {
  if (musicPlaying) {
    music.pause();
  } else {
    music.play();
  }
  musicPlaying = !musicPlaying;
};

petBtn.onclick = () => {
  petClickCount++;

  petSound.currentTime = 0;
  petSound.play();

  clearTimeout(clickTimer);
  clickTimer = setTimeout(() => {
    petClickCount = 0;
  }, 2000); // сбрасывает счёт через 2 секунды без нажатий

  if (petClickCount >= 10) {
    petClickCount = 0;
    overlay.style.display = "block";
    specialSound.currentTime = 0;
    specialSound.play();
  }
};

