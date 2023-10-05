const p1 = document.querySelector("#password");
const p2 = document.querySelector("#password-confirmation");
const message = document.querySelector("#form-message");

p2.addEventListener("focusout", checkSame);

function checkSame() {
  if (p1.value !== p2.value) {
    message.textContent = "Passwords do not match";
    message.style.color = "#d33b3b";
    p2.style.color = "#000000";
    p2.style.backgroundColor = "#ffd8d8";
    p1.value = "";
    p2.value = "";
    p1.focus();
  } else {
    message.textContent = "No errors to report";
    message.style.color = "#3a823a";
    p2.style.color = "#000000";
    p2.style.backgroundColor = "#ffffff";
  }
}
