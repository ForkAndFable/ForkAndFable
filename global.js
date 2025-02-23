document.addEventListener("DOMContentLoaded", function () {
    // 📌 Load JSON Recipes
    fetch('data/recipes.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Loaded Recipes:", data);
            setupCategories(data);
            setupSearch(data);
        })
        .catch(error => console.error("Error loading JSON:", error));

    // 📌 Toggle Sidebar Menu
    document.getElementById("menu-btn").addEventListener("click", function () {
        document.getElementById("sidebar").classList.toggle("active");
    });

    // 📌 Close Sidebar When Clicking Outside
    document.addEventListener("click", function (event) {
        let sidebar = document.getElementById("sidebar");
        let menuBtn = document.getElementById("menu-btn");

        if (!sidebar.contains(event.target) && event.target !== menuBtn) {
            sidebar.classList.remove("active");
        }
    });
});

// ✅ Load Categories on Homepage
function setupCategories(recipes) {
    const categories = ["Breakfast", "Lunch", "Dinner", "Desserts", "Snacks", "Drinks"];
    const container = document.getElementById("categories-container");

    categories.forEach(category => {
        let categoryCard = `
            <div class="category-card" onclick="openCategory('${category}')">
                <img src="images/${category.toLowerCase()}.jpg" alt="${category}">
                <h3>${category}</h3>
            </div>
        `;
        container.innerHTML += categoryCard;
    });
}

// ✅ Redirect to Category Page
function openCategory(category) {
    window.location.href = `category.html?category=${category}`;
}

// ✅ Search Feature
function setupSearch(recipes) {
    document.getElementById("search-form").addEventListener("submit", function (event) {
        event.preventDefault();
        let searchQuery = document.getElementById("search-input").value.toLowerCase();

        let filteredRecipes = recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(searchQuery) ||
            recipe.category.toLowerCase().includes(searchQuery)
        );

        if (filteredRecipes.length > 0) {
            localStorage.setItem("searchResults", JSON.stringify(filteredRecipes));
            window.location.href = "search-results.html";
        } else {
            alert("No recipes found!");
        }
    });
}
