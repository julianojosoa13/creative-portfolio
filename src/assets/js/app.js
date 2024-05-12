import gsap from "gsap";

const bar = document.querySelector(".loading__bar--inner");
const progress = document.querySelector(".loading__counter--number");

const progressBox = document.querySelector(".loading__box");

const progressSvg = document.querySelector(".loading__svg");

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
      top: "-800%",
    });

    gsap.to(".loading__text,.loading__counter", {
      duration: 0.5,
      opacity: 0,
    });

    const currentWidth = progressBox.clientWidth;

    gsap.to(".loading__box", {
      duration: 1,
      height: currentWidth,
      width: currentWidth,
      borderRadius: "50%",
    });

    gsap.to(".loading__svg", {
      duration: 10,
      opacity: 1,
      rotate: "360deg",
    });
  }
}, 20);
