const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

let oLastModif = new Date(document.lastModified);
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last modified: ${oLastModif.toLocaleString()}`;
