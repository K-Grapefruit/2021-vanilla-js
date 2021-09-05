const images = ["0.jpg", "1.jpg", "2.jpg"];
const body = document.querySelector("body");

function paintImage(num) {
  //image객체가 생성되어 속성들을 추가할수 있음
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
