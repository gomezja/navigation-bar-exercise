// nav icon is pressed
function responsiveManager() {
    var nav = document.getElementById("nav");
    
    if (nav.className === "navbar") {
        nav.className += " responsive";
    } else {
        nav.className = "navbar";
    }
}

// dropdown nav item is clicked
function dropdownClicked() {
    var drop = document.getElementById("dropdown");

    if (drop.className === "dropdown-content") {
        drop.className = "dropdown-content clicked";
    } else {
        drop.className = "dropdown-content";
    }
}