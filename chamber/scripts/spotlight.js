const spotlightContainer = document.querySelector("#spotlight-container");

const membersUrl = "./data/member.json";

async function loadSpotlights() {
    try {
        const response = await fetch(membersUrl);
        if (response.ok) {
            const membersData = await response.json();

            const filteredMembers = membersData.filter(member =>
                member.membership_level === 2 || member.membership_level === 3
            );

            if (filteredMembers.length === 0) {
                console.log("No members found with Silver (2) or Gold (3) membership.");
                return;
            }

            const randomSpotlights = getRandomMembers(filteredMembers, 3);

            spotlightContainer.innerHTML = "";

            randomSpotlights.forEach(member => {
                const memberCard = `
          <div class="spotlight-card">
            <img src="${member.image}" alt="${member.name} logo">
            <h3>${member.name}</h3>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership Level:</strong> ${member.membership_level === 3 ? 'Gold' : 'Silver'}</p>
          </div>
        `;
                spotlightContainer.innerHTML += memberCard;
            });
        } else {
            throw new Error("Error loading members data");
        }
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

function getRandomMembers(members, count) {
    const shuffled = members.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count); 
}

document.addEventListener("DOMContentLoaded", loadSpotlights);
