const p1 = document.querySelector("#password");
const p2 = document.querySelector("#password-confirmation");
const message = document.querySelector("#form-message");

p2.addEventListener("focusout", checkSame);

function checkSame() {
  if (p1.value !== p2.value) {
    message.textContent = "Passwords do not match";
    p2.style.backgroundColor = "#ffd8d8";
    p1.value = "";
    p2.value = "";
    p1.focus();
  } else {
    message.textContent = "";
    p2.style.backgroundColor = "#ffffff";
  }
}
