// stop default loading
document
  .querySelectorAll(".watch-control, .control a, .iphone-btn")
  .forEach((control) => {
    control.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });

// background slideshow start
slideShowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement("div");
    div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;
    if (i === 1) {
      div.classList.add("change");
    }
    document.querySelector(".slide-show").appendChild(div);
  }
};
slideShowDivs();

const divs = document.querySelectorAll(".slide-show div");
let counter = 1;

const slideShow = () => {
  setInterval(() => {
    counter++;
    const div = document.querySelector(".slide-show .change");
    div.classList.remove("change");
    if (counter < divs.length) {
      div.nextElementSibling.classList.add("change");
    } else {
      divs[0].classList.add("change");
      counter = 0;
    }
  }, 20000);
};
slideShow();
// background slideshow end

// cube and control start
let x = 0;
let y = 20;
let z = 0;
let bool = true;
let interval;
const cube = document.querySelector(".cube");

const playPause = () => {
  if (bool) {
    interval = setInterval(() => {
      cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
    }, 100);
  } else {
    clearInterval(interval);
  }
};
playPause();

document.querySelector(".control").addEventListener("mouseover", () => {
  bool = false;
  playPause();
});
document.querySelector(".control").addEventListener("mouseout", () => {
  bool = true;
  playPause();
});

document.querySelector(".top-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
document.querySelector(".bottom-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});
document.querySelector(".left-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg)`;
});
document.querySelector(".right-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y += 20)}deg) rotateZ(${z}deg)`;
});
document.querySelector(".top-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg)`;
});
document.querySelector(".bottom-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg)`;
});
// cube and control start
const section3Content = document.querySelector(".section-3-content");

window.addEventListener("scroll", () => {
  if (
    window.pageYOffset + window.innerHeight >=
    section3Content.offsetTop + section3Content.offsetHeight / 2
  ) {
    section3Content.classList.add("change");
  }
});

// watch control
const watchBands = document.querySelector(".watch-bands");
const watchCases = document.querySelector(".watch-cases");
const watchTopControl = document.querySelector(".watch-top-control");
const watchBottomControl = document.querySelector(".watch-bottom-control");
const watchLeftControl = document.querySelector(".watch-left-control");
const watchRightControl = document.querySelector(".watch-right-control");

let axisX = 0;
let axisY = 0;

function hideControl() {
  if (axisY === -280) {
    watchTopControl.classList.add("hide-control");
  } else {
    watchTopControl.classList.remove("hide-control");
  }
  if (axisY === 280) {
    watchBottomControl.classList.add("hide-control");
  } else {
    watchBottomControl.classList.remove("hide-control");
  }
  if (axisX === 280) {
    watchLeftControl.classList.add("hide-control");
  } else {
    watchLeftControl.classList.remove("hide-control");
  }
  if (axisX === -280) {
    watchRightControl.classList.add("hide-control");
  } else {
    watchRightControl.classList.remove("hide-control");
  }
}

watchTopControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${(axisY -= 70)}rem`;
  hideControl();
});
watchBottomControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${(axisY += 70)}rem`;
  hideControl();
});
watchLeftControl.addEventListener("click", () => {
  watchBands.style.marginLeft = `${(axisX += 70)}rem`;
  hideControl();
});
watchRightControl.addEventListener("click", () => {
  watchBands.style.marginLeft = `${(axisX -= 70)}rem`;
  hideControl();
});
