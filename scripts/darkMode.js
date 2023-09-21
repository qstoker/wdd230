const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const cardLinks = document.querySelector(".card").querySelectorAll("a");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("☽")) {
    body.style.background = "#202124";
    body.style.color = "#fff";
    modeButton.textContent = "☼";

    cardLinks.forEach((link) => {
      link.style.textDecoration = "underline";
      link.style.color = "#81c3d7";
    });
  } else {
    body.style.background = "#fff";
    body.style.color = "#000";
    modeButton.textContent = "☽";

    cardLinks.forEach((link) => {
      link.style.textDecoration = "underline";
      link.style.color = "#2f6690";
    });
  }
});
