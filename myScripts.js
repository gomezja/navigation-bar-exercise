// gets called when user preses hamburger icon
function responsiveManager() {
    var nav = document.getElementById("nav");

    if (nav.className === "navbar") {
        nav.className += " responsive";
        console.log("hello");
    } else {
        nav.className = "navbar";
        console.log("here");
    }
}