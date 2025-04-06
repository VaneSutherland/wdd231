// app.js

const apiKey = "8952d82182834605b759aed8e9711552"; // Reemplaza con tu propia API Key
const apiUrl = "https://api.spoonacular.com/recipes/random"; // Endpoint para recetas aleatorias

document.addEventListener("DOMContentLoaded", function () {
  fetchRandomRecipes();
});

// Función para obtener recetas aleatorias
function fetchRandomRecipes() {
  const url = `${apiUrl}?apiKey=${apiKey}&number=3`; // Obtener 3 recetas aleatorias

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

// Función para mostrar las recetas aleatorias
function displayRandomRecipes(recipes) {
  const recipesContainer = document.getElementById("recipes-container");
  recipesContainer.innerHTML = ""; // Limpiar contenido previo

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
