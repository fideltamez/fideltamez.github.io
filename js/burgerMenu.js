var burger = document.getElementById('menuBurger');
var menuHeader = document.getElementById('menuHeader');

burger.addEventListener('click', function () {
    menuHeader.classList.toggle('showMenu');
});
