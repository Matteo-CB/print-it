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
const dots = document.getElementById("dots");
let index = 0;
dots.children[index].classList.add("dot_selected");

arrowLeft.addEventListener("click", () => {
  dots.children[index].classList.remove("dot_selected");
  if (index == 0) {
    index = 3;
    dots.children[index].classList.add("dot_selected");
  } else {
    index--;
    dots.children[index].classList.add("dot_selected");
  }
  bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
  tagLine.innerHTML = slides[index].tagLine;
});

arrowRight.addEventListener("click", () => {
  dots.children[index].classList.remove("dot_selected");
  if (index == 3) {
    index = 0;
    dots.children[index].classList.add("dot_selected");
  } else {
    index++;
    dots.children[index].classList.add("dot_selected");
  }
  bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
  tagLine.innerHTML = slides[index].tagLine;
});
