document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('nav');

    if (hamburgerButton) {
        hamburgerButton.addEventListener('click', () => {
            navMenu.classList.toggle('show');

            if (hamburgerButton.textContent === '☰') {
                hamburgerButton.textContent = '✖';
            } else {
                hamburgerButton.textContent = '☰';
            }
        });
    }

    const fetchMembers = async () => {
        try {
            const response = await fetch("./data/member.json");
            const members = await response.json();
            displayMembers(members);
        } catch (error) {
            console.error("Error cargando los miembros:", error);
        }
    };

    const displayMembers = (members) => {
        const cardContainer = document.querySelector("#cards");
        if (!cardContainer) return;

        cardContainer.innerHTML = "";

        members.forEach(member => {
            let memberCard = document.createElement("div");
            memberCard.classList.add("card");

            memberCard.innerHTML = `
                <img src="${member.image}" alt="${member.name}" class="member-image">
                <h3>${member.name}</h3>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Membership Level:</strong> ${member.membership_level}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            `;

            cardContainer.appendChild(memberCard);
        });
    };

    const toggleView = (view) => {
        const cardContainer = document.querySelector("#cards");
        if (!cardContainer) return;

        if (view === "grid") {
            cardContainer.classList.add("grid-view");
            cardContainer.classList.remove("list-view");
        } else {
            cardContainer.classList.add("list-view");
            cardContainer.classList.remove("grid-view");
        }
    };

    const gridButton = document.querySelector("#grid-view");
    const listButton = document.querySelector("#list-view");

    if (gridButton && listButton) {
        gridButton.addEventListener("click", () => toggleView("grid"));
        listButton.addEventListener("click", () => toggleView("list"));
    }

    toggleView("grid");
    fetchMembers();
});
