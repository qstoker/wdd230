const today = new Date();
const dayOfWeek = today.getDay();
const banner = document.querySelector("#banner");

if (dayOfWeek == 1 || dayOfWeek == 2 || dayOfWeek == 3) {
  let text = document.createElement("p");
  let closeBanner = document.createElement("div");

  text.textContent = "Join us for for a chamber meet and greet at 7:00 p.m. on Wednesday!";

  closeBanner.id = "close-banner";

  banner.appendChild(text);
  banner.appendChild(closeBanner);

  closeBanner.addEventListener("click", () => {
    banner.classList.toggle("close");
  });
}
