const visitsDisplay = document.querySelector(".last-visit");
const msPerDay = 84600000;

let thisVisit = Date.now();
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls")) || 0;

const msElapsed = thisVisit - lastVisit;
const daysElapsed = Math.floor(msElapsed / msPerDay);

if (lastVisit == 0) {
  visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else {
  if (daysElapsed < 1) {
    visitsDisplay.textContent = "Back so soon! Awesome!";
  } else if (daysElapsed < 2) {
    visitsDisplay.textContent = `You last visited ${daysElapsed} day ago.`;
  } else {
    visitsDisplay.textContent = `You last visited ${daysElapsed} days ago.`;
  }
}

localStorage.setItem("lastVisit-ls", thisVisit);
