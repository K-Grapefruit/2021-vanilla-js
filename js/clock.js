const clock = document.querySelector("h2#clock");
const day = document.getElementById("today");

function getClock() {
  const date = new Date();

  const thisyear = date.getFullYear();
  const thisMonth = String(date.getMonth() + 1).padStart(2, "0");
  const today = String(date.getDate()).padStart(2, "0");

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  day.innerText = `${thisyear} / ${thisMonth} / ${today}`;
}

getClock();
setInterval(getClock, 1000);
