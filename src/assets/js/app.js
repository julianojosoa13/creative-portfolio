import gsap from "gsap";

const bar = document.querySelector(".loading__bar--inner");
const progress = document.querySelector(".loading__counter--number");
let c = 0;

let barInterval = setInterval(() => {
  bar.style.width = c + "%";
  progress.innerText = c + "%";
  c++;
  if (c > 100) {
    clearInterval(barInterval);

    gsap.to(".loading__bar", {
      duration: 5,
      rotate: "90deg",
      left: "1000%",
    });
  }
}, 20);
