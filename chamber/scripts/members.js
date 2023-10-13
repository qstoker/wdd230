const url = "https://qstoker.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector("#cards");

async function getMembers(url) {
  const response = await fetch(url);
  const data = await response.json();
  //   console.table(data);

  displayMembers(data.members);
}

const displayMembers = (members) => {
  members.forEach((member) => {
    let name = document.createElement("section");
    let address = document.createElement("h2");
    let phone = document.createElement("p");
    let url = document.createElement("p");
    let image = document.createElement("img");
    // make this vvv a border color?
    let tier = document.createElement("img");

    fullName.textContent = `${member.name} ${member.lastname}`;
    birthdate.textContent = `Date of Birth: ${member.birthdate}`;
    birthplace.textContent = `Place of Birth: ${member.birthplace}`;

    portrait.setAttribute("src", member.imageurl);
    portrait.setAttribute("alt", `${member.name} ${member.lastname} portrait`);
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

getMembers(url);
