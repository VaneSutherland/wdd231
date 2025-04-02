const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton"); 
const dialogBoxText = document.querySelector("#dialogBox div");


openButtonNp.addEventListener("click",() => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "Ideal for non-profit organizations. Includes access to community events, a listing in the member directory, and a monthly newsletter with news and opportunities."
});

openButtonBronze.addEventListener("click",() => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "Perfect for small businesses. Enjoy 5-10% discounts on events, a welcome post on social media, and one spotlight feature in the newsletter per year"
});

openButtonSilver.addEventListener("click",() => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "Boost your visibility with 15-20% discounts, rotating homepage advertising, two newsletter features per year, and access to exclusive business training and networking event"
});

openButtonGold.addEventListener("click",() => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = "Maximize your exposure with 25-30% discounts, fixed homepage advertising, monthly social media promotions, VIP event access, and sponsorship opportunities for community events."
});

closeButton.addEventListener("click",() => {
    dialogBox.close();
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const timestampInput = document.querySelector("#timestamp");

    form.addEventListener("submit", () => {
        timestampInput.value = Date.now(); 
    });
});


