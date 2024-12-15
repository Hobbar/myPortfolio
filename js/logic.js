function toggleMenu() {
    const menu = document.querySelector('.nav-bar-menu2');
    const icon = document.querySelector('.menu-icon');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    icon.classList.toggle('change');
}
