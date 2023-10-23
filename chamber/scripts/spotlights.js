const url = "https://qstoker.github.io/wdd230/chamber/data/members.json";
const spotlights = document.querySelector(".spotlights");
const spotlightList = [];

async function getSpotlights(url) {
  const response = await fetch(url);
  const data = await response.json();

  pickSpotlights(data.members);
}

function pickSpotlights(members) {
  members.forEach((member) => {
    if (member.tier == "Silver" || member.tier == "Gold") {
      spotlightList.push(member);
    }
  });

  if (spotlightList.length < 3) {
    // while (spotlightList.length < 3) {
    //   spotlightList.push(["-", "-", "-", "-", "-", "-"]);
    // }
  } else if (spotlightList.length > 3) {
    while (spotlightList.length > 3) {
      spotlightList.splice(Math.floor(Math.random() * spotlightList.length), 1);
    }
  }

  shuffleList(spotlightList);

  displaySpotlights(spotlightList);
}

function shuffleList(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [list[i], list[j]] = [list[j], list[i]];
  }
}

function displaySpotlights(members) {
  members.forEach((member) => {
    if (member.tier == "Silver" || member.tier == "Gold") {
      let item = document.createElement("div");
      let name = document.createElement("h3");
      let address = document.createElement("p");
      let phone = document.createElement("p");
      let url = document.createElement("a");
      // let logo = document.createElement("img");
      // let tier = document.createElement("p");

      name.textContent = member.name;
      address.textContent = member.address;
      phone.textContent = member.phone;
      url.textContent = member.url;
      // tier.textContent = `${member.tier} Member`;

      url.setAttribute("href", member.url);

      item.className = "member";

      // logo.setAttribute("src", member.logo);
      // logo.setAttribute("alt", `${member.name} logo`);
      // logo.setAttribute("loading", "lazy");
      // logo.setAttribute("width", "192");
      // logo.setAttribute("height", "192");

      // item.appendChild(logo);
      item.appendChild(name);
      item.appendChild(phone);
      item.appendChild(url);
      item.appendChild(address);
      // item.appendChild(tier);

      spotlights.appendChild(item);
    }
  });
}

getSpotlights(url);
