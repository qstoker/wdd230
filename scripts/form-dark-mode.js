const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const inputFields = document.querySelector("fieldset").querySelectorAll("input");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("☽")) {
    body.style.background = "#202124";
    body.style.color = "#fff";
    modeButton.textContent = "☼";

    inputFields.forEach((input) => {
      input.style.background = "#202124";
      input.style.color = "#fff";
    });
  } else {
    body.style.background = "#fff";
    body.style.color = "#000";
    modeButton.textContent = "☽";

    inputFields.forEach((input) => {
      input.style.background = "#fff";
      input.style.color = "#000";
    });
  }
});
