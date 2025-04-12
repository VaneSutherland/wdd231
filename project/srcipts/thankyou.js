document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
  
    const timestamp = urlParams.get('timestamp');
    const formattedDate = new Date(Number(timestamp)).toLocaleString();
  
    document.querySelector("#results").innerHTML = `
      <h2>Thank You for Sharing Your Recipe!</h2>
      <p><strong>Recipe Name:</strong> ${urlParams.get('recipe-name') || "Not provided"}</p>
      <p><strong>Diet Type:</strong> ${urlParams.get('diet-type') || "Not provided"}</p>
      <p><strong>Ingredients:</strong> ${urlParams.get('ingredients') || "Not provided"}</p>
      <p><strong>Instructions:</strong> ${urlParams.get('instructions') || "Not provided"}</p>
      <p><strong>Preparation Time:</strong> ${urlParams.get('prep-time') || "Not provided"} minutes</p>
      <p><strong>Cook Time:</strong> ${urlParams.get('cook-time') || "Not provided"} minutes</p>
      <p><strong>Difficulty:</strong> ${urlParams.get('difficulty') || "Not provided"}</p>
      <p>We are excited to see your recipe!</p>
    `;
  });
  