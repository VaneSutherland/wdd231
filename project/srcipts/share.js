const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton"); 
const dialogBoxText = document.querySelector("#dialogBox div");


openButtonVegan.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
        <h3>Vegan Diet</h3>
        <p>This diet excludes all animal products. Vegans eat fruits, vegetables, whole grains, legumes, nuts, seeds, and plant-based products. It's a great choice for those concerned about animal welfare, health, and the environment.</p>
    `;
});

openButtonVegetarian.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
        <h3>Vegetarian Diet</h3>
        <p>The vegetarian diet excludes meat but includes animal-derived products such as dairy and eggs. It's an ethical and health-conscious diet, offering a variety of plant-based foods.</p>
    `;
});

openButtonGlutenF.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
        <h3>Gluten-Free Diet</h3>
        <p>This diet eliminates gluten, a protein found in wheat, barley, and rye. It's essential for people with celiac disease or gluten sensitivity. Gluten-free foods include rice, potatoes, vegetables, and gluten-free grains.</p>
    `;
});

openButtonLowCarb.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
        <h3>Low-Carb Diet</h3>
        <p>This diet restricts carbohydrates, especially refined sugars and starches. It focuses on protein-rich foods like meat, eggs, and fish, as well as healthy fats. It's often used for weight loss and controlling blood sugar levels.</p>
    `;
});

openButtonKeto.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
        <h3>Keto Diet</h3>
        <p>The ketogenic diet is a very low-carb, high-fat diet that forces the body to enter ketosis, a state where it burns fat for energy instead of carbs. It's popular for weight loss and managing epilepsy.</p>
    `;
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});



