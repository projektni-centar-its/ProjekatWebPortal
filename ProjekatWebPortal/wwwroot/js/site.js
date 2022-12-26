/* Functions for layout-sidebar */

function openNav() {

    var myNav = document.getElementById("navbarToggleExternalContent");

    myNav.style.display = myNav.style.display === 'none' ? '' : 'none';

    document.getElementById("demo").onclick = closeNav;
}

function closeNav() {

    document.getElementById("navbarToggleExternalContent").style.display = "none";

    document.getElementById("demo").onclick = openNav;
}