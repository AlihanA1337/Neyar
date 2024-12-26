function updateCountdown(){
  const now = new Date(); 
  const nextYear = now.getFullYear() + 1;
  const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
  const diff = newYear - now;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
const sec = Math.floor((diff % (1000 * 60)) / 1000);

const countdownElement = document.getElementById("countdown__timer");
countdownElement.textContent = `${days}күн. ${hours}сағ. ${min} мин. ${sec} сек.`;
}

setInterval(updateCountdown, 1000);
updateCountdown();


