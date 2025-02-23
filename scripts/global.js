function filterByCategory(category) {
    window.location.href = `category.html?category=${category}`;
}

function loadRecipes(category) {
    fetch("data/recipes.json")
        .then(response => response.json())
        .then(data => {
            const recipesContainer = document.getElementById("recipesContainer");
            recipesContainer.innerHTML = "";

            data.recipes
                .filter(recipe => recipe.category === category)
                .forEach(recipe => {
                    let recipeElement = document.createElement("div");
                    recipeElement.innerHTML = `
                        <h3>${recipe.name}</h3>
                        <p>${recipe.description}</p>
                        <button onclick="viewRecipe('${recipe.id}')">View Recipe</button>
                    `;
                    recipesContainer.appendChild(recipeElement);
                });
        });
}

function viewRecipe(recipeId) {
    window.location.href = `recipe.html?id=${recipeId}`;
}

function loadRecipeDetails(recipeId) {
    fetch("data/recipes.json")
        .then(response => response.json())
        .then(data => {
            const recipe = data.recipes.find(r => r.id === recipeId);
            if (recipe) {
                document.getElementById("recipeTitle").innerText = recipe.name;
                document.getElementById("recipeDescription").innerText = recipe.description;
                document.getElementById("recipeInstructions").innerText = recipe.instructions;
                
                let ingredientsList = document.getElementById("ingredientsList");
                recipe.ingredients.forEach(ingredient => {
                    let li = document.createElement("li");
                    li.innerText = ingredient;
                    ingredientsList.appendChild(li);
                });
            }
        });
}
