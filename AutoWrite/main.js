const textEl = document.getElementById("text"); //h1
const speedEl = document.getElementById("speed");
const mytext = "I will be back soon!";

let idx = 1;

let speed = 1000 / speedEl.value;
//SetTimeOut ikinci parametre zamanı alıyor kısa olursa daha hızlı olur
writeText();

function writeText() {
  textEl.innerText = mytext.slice(0, idx);

  idx++;

  if (idx > mytext.length) {
    idx = 1;
  }
  speed = 1000 / speedEl.value;
  setTimeout(writeText, speed);
}
