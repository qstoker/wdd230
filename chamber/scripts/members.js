const url = "https://qstoker.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector("#cards");

async function getMembers(url) {
  const response = await fetch(url);
  const data = await response.json();
  //   console.table(data);

  displayMembers(data.prophets);
}

const displayMembers = (prophets) => {
  prophets.forEach((prophet) => {
    let card = document.createElement("section");
    let fullName = document.createElement("h2");
    let birthdate = document.createElement("p");
    let birthplace = document.createElement("p");
    let portrait = document.createElement("img");

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `${prophet.name} ${prophet.lastname} portrait`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    card.appendChild(fullName);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};

getProphetData(url);
