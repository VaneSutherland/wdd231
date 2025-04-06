const apiKey = "8952d82182834605b759aed8e9711552";
const apiUrl = "https://api.spoonacular.com/recipes/random";

document.addEventListener("DOMContentLoaded", function () {
  fetchRandomRecipes();
});


function fetchRandomRecipes() {
  const url = `${apiUrl}?apiKey=${apiKey}&number=3`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayRandomRecipes(data.recipes);
    })
    .catch(error => {
      console.error("Error fetching random recipes:", error);
      const recipesContainer = document.getElementById("recipes-container");
      recipesContainer.innerHTML = "Could not load random recipes. Please try again later.";
    });
}

function displayRandomRecipes(recipes) {
  const recipesContainer = document.getElementById("recipes-container");
  recipesContainer.innerHTML = ""; 

  recipes.forEach(recipe => {
    const recipeElement = document.createElement("div");
    recipeElement.classList.add("recipe");

    recipeElement.innerHTML = `
      <h3>${recipe.title}</h3>
      <img src="${recipe.image}" alt="${recipe.title}" width="200" />
      <p><strong>Ready in:</strong> ${recipe.readyInMinutes} minutes</p>
      <a href="${recipe.sourceUrl}" target="_blank">View Full Recipe</a>
    `;

    recipesContainer.appendChild(recipeElement);
  });
}
