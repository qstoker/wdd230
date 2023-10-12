const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const a = document.querySelector("a");

modeButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("a");

  if (modeButton.textContent.includes("☽")) {
    modeButton.textContent = "☼";
  } else {
    modeButton.textContent = "☽";
  }
});
