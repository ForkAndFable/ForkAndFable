function toggleMenu() {
    document.getElementById("sideMenu").style.width = "250px";
}

function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
}

function searchRecipe() {
    var query = document.getElementById("searchBox").value.toLowerCase();
    if (query.includes("breakfast")) {
        window.location.href = "recipes/breakfast.html";
    } else if (query.includes("cookie")) {
        window.location.href = "recipes/cookie.html";
    } else {
        alert("Recipe not found!");
    }
    return false;
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
