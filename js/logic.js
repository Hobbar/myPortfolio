function toggleMenu() {
    const menu = document.querySelector('.nav-bar-menu2');
    const icon = document.querySelector('.menu-icon');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    icon.classList.toggle('change');
    
}
// Function to show the popup
function showPopup(imgElement) {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    popupImg.src = imgElement.src; // Set the clicked image's src to the popup image
    popup.style.display = 'flex'; // Show the popup
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // Hide the popup
}