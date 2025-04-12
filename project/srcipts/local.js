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
