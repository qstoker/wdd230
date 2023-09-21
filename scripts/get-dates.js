let currentDate = new Date();
let lastModified = new Date(document.lastModified);

document.querySelector("#current-year").innerHTML = currentDate.getFullYear();

document.querySelector("#lastModified").innerHTML = "Last Modification: " + lastModified.toLocaleString();
