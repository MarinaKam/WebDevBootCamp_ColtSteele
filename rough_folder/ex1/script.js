function openNav() {
    document.getElementById("hidNav").style.height = "100%";
    document.getElementById("hidNav").style.width = "100%";
    document.querySelector(".wrap").style.marginRight = "100%";
}

function closeNav() {
    document.getElementById("hidNav").style.height = "0";
    document.getElementById("hidNav").style.width = "0";
    document.querySelector(".wrap").style.marginRight= "0";
}