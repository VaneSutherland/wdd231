const apiKey = "8952d82182834605b759aed8e9711552";
const apiUrl = "https://api.spoonacular.com/recipes/complexSearch";

document.addEventListener("DOMContentLoaded", () => {
  fetchRecipes();

  const dietSelect = document.getElementById("diet-type");
  dietSelect.addEventListener("change", (event) => {
    const selectedDiet = event.target.value;
    fetchRecipes(selectedDiet);
  });
});

function fetchRecipes(diet = "") {
  const numberOfRecipes = diet ? 50 : 30;

  const url = `${apiUrl}?apiKey=${apiKey}&number=${numberOfRecipes}${diet ? `&diet=${diet}` : ""}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.results && data.results.length > 0) {
        displayRecipes(data.results);
      } else {
        console.error("No recipes found.");
        document.getElementById("recipes-container").innerHTML = "No recipes available for this diet.";
      }
    })
    .catch(error => {
      console.error("Error fetching recipes:", error);
      document.getElementById("recipes-container").innerHTML = "Failed to load recipes.";
    });
}

function displayRecipes(recipes) {
  const recipesContainer = document.getElementById("recipes-container");
  recipesContainer.innerHTML = '';

  recipes.forEach(recipe => {
    const recipeElement = document.createElement("div");
    recipeElement.classList.add("recipe");

    recipeElement.innerHTML = `
      <h3>${recipe.title}</h3>
      <img src="${recipe.image}" alt="${recipe.title}" width="200" />
      <p><strong>Ready in:</strong> ${recipe.readyInMinutes} minutes</p>
      <p><strong>Servings:</strong> ${recipe.servings}</p>
      <a href="${recipe.sourceUrl}" target="_blank">View Full Recipe</a>
    `;

    recipesContainer.appendChild(recipeElement);
  });
}
