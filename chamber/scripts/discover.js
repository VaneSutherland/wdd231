document.addEventListener("DOMContentLoaded", () => {
    const fetchDiscover = async () => {
        try {
            const response = await fetch("./data/discover.json");
            const discover = await response.json();
            displayDiscover(discover);
        } catch (error) {
            console.error("error", error);
        }
    };

    const displayDiscover = (discover) => {
        const cardContainer = document.querySelector("#cards");
        if (!cardContainer) return;

        cardContainer.innerHTML = "";

        discover.forEach(item => {
            let discoverCard = document.createElement("div");
            discoverCard.classList.add("card"); 

            discoverCard.innerHTML = `
                <h2>${item.title}</h2>
                <figure>
                    <img src="${item.image}" alt="${item.title}" class="card-image">
                </figure>
                <div class="text">
                    <p>${item.description}</p>
                    <address>${item.address}</address>

                </div>
                <button class="learn-more-btn">Learn More</button>
            `;

            cardContainer.appendChild(discoverCard);
        });
    };

    fetchDiscover();
});


window.addEventListener('load', () => {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentTime = Date.now();
    const visitMessage = document.getElementById('visitMessage');

    if (!lastVisit) {
        visitMessage.innerHTML = "Welcome! Let us know if you have any questions.";
    } else {
        const timeDifference = currentTime - lastVisit;
        const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

        if (daysDifference < 1) {
            visitMessage.innerHTML = "Back so soon! Awesome!";
        } else {
            if (daysDifference === 1) {
                visitMessage.innerHTML = `You last visited 1 day ago.`;
            } else {
                visitMessage.innerHTML = `You last visited ${daysDifference} days ago.`;
            }
        }
    }

    localStorage.setItem('lastVisit', currentTime);
});
