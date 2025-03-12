const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const all = document.querySelector("#all");
const utah = document.querySelector("#utah");
const nonus = document.querySelector("#nonus");
const old = document.querySelector("#old");
const child = document.querySelector("#child");
const ten = document.querySelector("#ten");


const getProphets = async (filter = "all") => {
    const response = await fetch(url);
    const data = await response.json();
    let prophets = data.prophets;

    
    switch (filter) {
        case "utah":
            prophets = prophets.filter(prophet => prophet.birthplace.includes("Utah"));
            break;
        case "nonus":
            prophets = prophets.filter(prophet => !prophet.birthplace.includes("United States"));
            break;
        case "old":
            prophets = prophets.filter(prophet => getAgeAtDeath(prophet.birthdate, prophet.death) >= 95);
            break;
        case "child":
            prophets = prophets.filter(prophet => prophet.numofchildren >= 10);
            break;
        case "ten":
            prophets = prophets.filter(prophet => prophet.length >= 15);
            break;
        default:
            break;
    }

    displayProphets(prophets);
};

function getAgeAtDeath(birthdate, deathdate) {
    const birth = new Date(birthdate);
    const death = deathdate ? new Date(deathdate) : new Date();
    return Math.floor((death - birth) / (365 * 24 * 60 * 60 * 1000));
}

const displayProphets = (prophets) => {
    const cards = document.querySelector("#cards");
    cards.innerHTML = "";

    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let stats = document.createElement("div");
        stats.classList.add("stats");
        let birthdate = document.createElement("p");
        let birthplace = document.createElement("p");
     

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        birthdate.innerHTML = `<span class="label">Birth:</span> ${prophet.birthdate}`;
        birthplace.innerHTML = `<span class="label">Place:</span> ${prophet.birthplace}`;
       
       
        let portrait = document.createElement("img");
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} – ${prophet.order}th Latter-day Prophet`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        stats.appendChild(birthdate);
        stats.appendChild(birthplace);

        card.appendChild(h2);
        card.appendChild(stats);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};

all.addEventListener("click", () => {
    clearButtonClasses();
    getProphets("all");
    all.classList.add("active");
});

utah.addEventListener("click", () => {
    clearButtonClasses();
    getProphets("utah");
    utah.classList.add("active");
});

nonus.addEventListener("click", () => {
    clearButtonClasses();
    getProphets("nonus");
    nonus.classList.add("active");
});

old.addEventListener("click", () => {
    clearButtonClasses();
    getProphets("old");
    old.classList.add("active");
});

child.addEventListener("click", () => {
    clearButtonClasses();
    getProphets("child");
    child.classList.add("active");
});

ten.addEventListener("click", () => {
    clearButtonClasses();
    getProphets("ten");
    ten.classList.add("active");
});

function clearButtonClasses() {
    document.querySelectorAll("nav button").forEach(button => button.classList.remove("active"));
}

getProphets();