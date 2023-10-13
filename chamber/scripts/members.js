const url = "https://qstoker.github.io/wdd230/chamber/data/members.json";
const directory = document.querySelector("#directory");

async function getMembers(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data);

  displayMembers(data.members);
}

function displayMembers(members) {
  members.forEach((member) => {
    let item = document.createElement("div");
    let name = document.createElement("h3");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let url = document.createElement("a");
    let logo = document.createElement("img");
    let tier = document.createElement("p");

    name.textContent = member.name;
    address.textContent = member.address;
    phone.textContent = member.phone;
    url.textContent = member.url;
    tier.textContent = `${member.tier} Member`;

    url.setAttribute("href", member.url);

    logo.setAttribute("src", member.logo);
    logo.setAttribute("alt", `${member.name} logo`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "128");
    logo.setAttribute("height", "128");

    item.appendChild(logo);
    item.appendChild(name);
    item.appendChild(address);
    item.appendChild(phone);
    item.appendChild(url);
    item.appendChild(tier);

    directory.appendChild(item);
  });
}

getMembers(url);
