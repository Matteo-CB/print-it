const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
let index = 0;

arrowLeft.addEventListener("click", () => {
  if (index == 0) {
    index = 3;
  }
  bannerImg.src = "./assets/images/slideshow/" + slides[index - 1].image;
  tagLine.innerHTML = slides[index - 1].tagLine;
  index--;
});

arrowRight.addEventListener("click", () => {
  if (index == 3) {
    index = 0;
  }
  bannerImg.src = "./assets/images/slideshow/" + slides[index + 1].image;
  tagLine.innerHTML = slides[index + 1].tagLine;
  index++;
});
