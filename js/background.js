const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const body = document.querySelector("body");

function paintImage(num) {
  const bgImage = new Image();
  bgImage.src = `img/${num}`;
  bgImage.classList.add("bgImage");
  body.prepend(bgImage);
  //   body.style.backgroundImage = `url(${bgImage})`;
}

function getRandom() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  return chosenImage;
}

function init() {
  const RanNum = getRandom();
  paintImage(RanNum);
}

init();
