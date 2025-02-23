document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedCategory = urlParams.get("category");

    if (selectedCategory) {
        document.getElementById("category-title").innerText = selectedCategory + " Recipes";
        loadCategoryRecipes(selectedCategory);
    }
});

function loadCategoryRecipes(category) {
    fetch("data/recipes.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load recipes.json");
            }
            return response.json();
        })
        .then(data => {
            if (!data || !Array.isArray(data)) {
                throw new Error("Invalid JSON format");
            }
            const filteredRecipes = data.filter(recipe => recipe.category.toLowerCase() === category.toLowerCase());
            displayRecipes(filteredRecipes);
        })
        .catch(error => console.error("Error fetching recipes:", error));
}

function displayRecipes(recipes) {
    const container = document.getElementById("recipe-list");
    container.innerHTML = "";

    if (recipes.length === 0) {
        container.innerHTML = "<p>No recipes found.</p>";
        return;
    }

    recipes.forEach(recipe => {
        let recipeCard = `
            <div class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.name}">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <a href="recipe.html?id=${recipe.id}">View Recipe</a>
            </div>
        `;
        container.innerHTML += recipeCard;
    });
}
