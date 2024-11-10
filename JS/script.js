// Toggle dropdown visibility on hamburger icon click
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    // Toggle between showing and hiding the menu
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});
