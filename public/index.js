let left = -2000;
let timer;

const cards = document.getElementById('slider');

const autoTimer = () => {
  if (left > 2200) {
    return;
  }
  timer = setTimeout(() => {
    cards.style.left = `${left}px`;
    left += 100;
    autoTimer();
  }, 500);
};

autoTimer();

cards.onmouseenter = () => {
  clearTimeout(timer);
};

cards.onmouseleave = () => {
  autoTimer();
};

const bid = document.getElementById('bid');
const ask = document.getElementById('ask');

const minNum = 1500;
const maxNum = 3499.99;

const randomValue = (min, max) => min + Math.random() * (max - min);

const generator = () => {
  const newBid = randomValue(minNum, maxNum).toFixed(2);
  const newAsk = randomValue(minNum, maxNum).toFixed(2);
  bid.innerHTML = `€${newBid}`;
  ask.innerHTML = `€${newAsk}`;
};

setInterval(generator, 15000);
