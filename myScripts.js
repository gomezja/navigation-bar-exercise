// hamburger icon is pressed
function hamburgerIconClicked() {
    var nav = document.getElementById("nav");
    var ham = document.getElementById("ham");
    
    // display / hide responsive dropdown menu for smaller
    // screens and transform hamburger icon to ham / X
    if (nav.className === "navbar box-shadow") {
        nav.className += " responsive";
        ham.className += " icon-x";
    } else {
        nav.className = "navbar box-shadow";
        ham.className = "nav-icon";
    }

    return false;
}

// dropdown nav item is clicked
function dropdownClicked() {
    var drop = document.getElementById("dropdown");

    // display dropdown items and rotate dropdown icon
    if (drop.className === "dropdown-content") {
        drop.className = "dropdown-content clicked";
        document.getElementById("dropdown-icon").style.transform = "rotate(180deg)";
    } else {
        drop.className = "dropdown-content";
        document.getElementById("dropdown-icon").style.transform = "none";
    }

    return false;
}