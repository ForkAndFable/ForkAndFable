// Sidebar Menu
function toggleMenu() {
    document.getElementById("sideMenu").style.width = "250px";
}

function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
}

// Slideshow
let index = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) { index = 1; }
    slides[index - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}
window.onload = showSlides;

// Search Recipes
function searchRecipe() {
    let query = document.getElementById("searchBox").value.toLowerCase();
    window.location.href = `recipe.html?id=${query}`;
}

// Filter Recipes by Category
function filterByCategory(category) {
    window.location.href = `recipe.html?category=${category}`;
}
