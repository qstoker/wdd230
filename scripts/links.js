const baseURL = "https://qstoker.github.io/wdd230/";
const linksURL = "https://qstoker.github.io/wdd230/data/links.json";
const weeksList = document.querySelector(".weeks-list");

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();

  displayLinks(data.weeks);
}

function displayLinks(weeks) {
  weeks.forEach((week) => {
    let newWeek = document.createElement("li");
    newWeek.textContent = `${week.week}`;

    week.links.forEach((link) => {
      let spacer = document.createElement("span");
      let url = document.createElement("a");

      if (link == week.links[0]) {
        spacer.textContent = `: `;
      } else {
        spacer.textContent = ` | `;
      }
      url.setAttribute("href", `${link.url}`);
      url.textContent = `${link.title}`;

      if (url.textContent !== "") {
        newWeek.appendChild(spacer);
      }
      newWeek.appendChild(url);
    });

    weeksList.appendChild(newWeek);
  });
}

getLinks();
