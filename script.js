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