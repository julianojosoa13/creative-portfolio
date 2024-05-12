const bar = document.querySelector(".loading__bar--inner");
const progress = document.querySelector(".loading__counter--number");
let c = 0;

let barInterval = setInterval(() => {
  bar.style.width = c + "%";
  progress.innerText = c + "%";
  c++;
  if (c > 100) {
    clearInterval(barInterval);
  }
}, 20);
