const apiUrl = "https://api.spoonacular.com/recipes/complexSearch";

document.addEventListener("DOMContentLoaded", () => {
  fetchRecipes();

  const dietSelect = document.getElementById("diet-type");
  dietSelect.addEventListener("change", (event) => {
    const selectedDiet = event.target.value;
    fetchRecipes(selectedDiet);
  });
});

async function fetchRecipes(diet = "") {
  const numberOfRecipes = diet ? 28 : 28;
  const url = `${apiUrl}?apiKey=${window.apiKey}&number=${numberOfRecipes}${diet ? `&diet=${diet}` : ""}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      displayRecipes(data.results);
    } else {
      console.error("No recipes found.");
      document.getElementById("recipes-diet").innerHTML = "No recipes available for this diet.";
    }
  } catch (error) {
    console.error("Error fetching recipes:", error);
    document.getElementById("recipes-diet").innerHTML = "Failed to load recipes.";
  }
}

function displayRecipes(recipes) {
  const recipesContainer = document.getElementById("recipes-diet");
  recipesContainer.innerHTML = '';

  recipes.forEach(recipe => {
    const recipeElement = document.createElement("div");
    recipeElement.classList.add("recipe");

    recipeElement.innerHTML = `
      <h3>${recipe.title}</h3>
      <img src="${recipe.image}" alt="${recipe.title}" width="200" />
      <a href="${recipe.sourceUrl}" target="_blank">View Full Recipe</a>
    `;

    recipesContainer.appendChild(recipeElement);
  });
}