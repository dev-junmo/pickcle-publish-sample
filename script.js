const slides = document.querySelector(".main-slides");
let slideWidth = slides.clientWidth;

let slideItems = document.querySelectorAll(".main-slides > li");
const maxSlide = slideItems.length;
let currSlide = 1;


const indication = document.querySelector(".slide-indication");
for (let i = 0; i < maxSlide; i++) {
  if (i === 0) indication.innerHTML += `<li class="on"></li>`;
  else indication.innerHTML += `<li></li>`;
}

const indicationItems = document.querySelectorAll(".slide-indication > li");

const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement("div");
const endElem = document.createElement("div");

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

slideItems = document.querySelectorAll(".main-slides > li");

let offset = slideWidth + currSlide;
slideItems.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
});


function nextMove() {
  currSlide++;
  if (currSlide <= maxSlide) {
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    indicationItems.forEach((i) => i.classList.remove("active"));
    indicationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide++;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    indicationItems.forEach((i) => i.classList.remove("active"));
    indicationItems[currSlide - 1].classList.add("active");
  }
}
