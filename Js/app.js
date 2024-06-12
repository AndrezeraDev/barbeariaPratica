document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('list');
    const dropdownMenu = document.getElementById('dropdownMenu');

    menuIcon.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });
});