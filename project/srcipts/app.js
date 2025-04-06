// Variables de configuración de la API
const apiKey = "8952d82182834605b759aed8e9711552"; // Reemplaza con tu propia clave de API
const apiUrl = "https://api.spoonacular.com/recipes/complexSearch"; // Endpoint de búsqueda de recetas

// Evento para cargar recetas cuando se selecciona un tipo de dieta
document.addEventListener("DOMContentLoaded", () => {
  // Al principio, cargar al menos 30 recetas si no hay filtro
  fetchRecipes();

  const dietSelect = document.getElementById("diet-type");
  dietSelect.addEventListener("change", (event) => {
    const selectedDiet = event.target.value;
    fetchRecipes(selectedDiet); // Filtrar recetas según la dieta seleccionada
  });
});

// Función para obtener las recetas (con un filtro de dieta opcional)
function fetchRecipes(diet = "") {
  // Configura el número de recetas dependiendo de si hay filtro o no
  const numberOfRecipes = diet ? 50 : 30;  // Si hay un filtro, solicita hasta 50 recetas, de lo contrario, 30

  // Construir la URL con el número de recetas y el filtro de dieta si es necesario
  const url = `${apiUrl}?apiKey=${apiKey}&number=${numberOfRecipes}${diet ? `&diet=${diet}` : ""}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data); // Verificar qué datos se están recibiendo
      if (data.results && data.results.length > 0) {
        displayRecipes(data.results); // Mostrar las recetas obtenidas
      } else {
        console.error("No recipes found.");
        // Mostrar mensaje si no hay recetas disponibles
        document.getElementById("recipes-container").innerHTML = "No recipes available for this diet.";
      }
    })
    .catch(error => {
      console.error("Error fetching recipes:", error);
      document.getElementById("recipes-container").innerHTML = "Failed to load recipes.";
    });
}

// Función para mostrar las recetas
function displayRecipes(recipes) {
  const recipesContainer = document.getElementById("recipes-container");
  recipesContainer.innerHTML = ''; // Limpiar contenido previo

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
