const url = "https://qstoker.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector("#cards");

async function getMembers(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data);

  displayMembers(data.members);
}

function displayMembers(members) {
  members.forEach((member) => {
    let card = document.createElement("div");
    let name = document.createElement("p");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let url = document.createElement("a");
    let logo = document.createElement("img");
    // make this vvv a border color?
    let tier = document.createElement("p");

    name.textContent = `${member.name}`;
    address.textContent = `${member.address}`;
    phone.textContent = `${member.phone}`;
    url.textContent = `${member.url}`;
    tier.textContent = `${member.tier}`;

    url.setAttribute("href", member.url);

    logo.setAttribute("src", member.logo);
    logo.setAttribute("alt", `${member.name} logo`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "128");
    logo.setAttribute("height", "128");

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);
    card.appendChild(logo);
    card.appendChild(tier);

    cards.appendChild(card);
  });
}

getMembers(url);
